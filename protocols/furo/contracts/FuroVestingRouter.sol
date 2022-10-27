// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity 0.8.10;

import './interfaces/IFuroVesting.sol';

contract FuroVestingRouter is Multicall {
  ICoffinBoxMinimal public immutable bentoBox;
  IFuroVesting public immutable furoVesting;
  address public immutable wETH;

  // custom errors
  error InsufficientShares();

  constructor(
    ICoffinBoxMinimal _bentoBox,
    IFuroVesting _furoVesting,
    address _wETH
  ) {
    bentoBox = _bentoBox;
    furoVesting = _furoVesting;
    wETH = _wETH;
    _bentoBox.setMasterContractApproval(address(this), address(_furoVesting), true, 0, bytes32(0), bytes32(0));
    _bentoBox.registerProtocol();
  }

  function setCoffinBoxApproval(
    address user,
    bool approved,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external payable {
    bentoBox.setMasterContractApproval(user, address(this), approved, v, r, s);
  }

  function createVesting(IFuroVesting.VestParams memory vestParams, uint256 minShare)
    external
    payable
    returns (
      uint256 depositedShares,
      uint256 vestId,
      uint128 stepShares,
      uint128 cliffShares
    )
  {
    depositedShares = _depositToken(
      address(vestParams.token),
      msg.sender,
      address(this),
      vestParams.amount,
      vestParams.fromCoffinBox
    );

    if (depositedShares < minShare) revert InsufficientShares();

    if (address(vestParams.token) == address(0)) {
      vestParams.token = IERC20(wETH);
    }
    vestParams.fromCoffinBox = true;

    (depositedShares, vestId, stepShares, cliffShares) = furoVesting.createVesting(vestParams);

    furoVesting.updateOwner(vestId, msg.sender);
  }

  function _depositToken(
    address token,
    address from,
    address to,
    uint256 amount,
    bool fromCoffinBox
  ) internal returns (uint256 depositedShares) {
    if (fromCoffinBox) {
      depositedShares = bentoBox.toShare(token, amount, false);
      bentoBox.transfer(token, from, to, depositedShares);
    } else {
      (, depositedShares) = bentoBox.deposit{value: token == address(0) ? amount : 0}(token, from, to, amount, 0);
    }
  }
}
