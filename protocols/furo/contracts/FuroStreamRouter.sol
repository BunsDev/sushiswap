// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity 0.8.10;

import './interfaces/IFuroStream.sol';

contract FuroStreamRouter is Multicall {
  ICoffinBoxMinimal public immutable coffinBox;
  IFuroStream public immutable furoStream;
  address public immutable wETH;

  // custom errors
  error InsufficientShares();

  constructor(
    ICoffinBoxMinimal _coffinBox,
    IFuroStream _furoStream,
    address _wETH
  ) {
    coffinBox = _coffinBox;
    furoStream = _furoStream;
    wETH = _wETH;
    _coffinBox.setMasterContractApproval(address(this), address(_furoStream), true, 0, bytes32(0), bytes32(0));
    _coffinBox.registerProtocol();
  }

  function setCoffinBoxApproval(
    address user,
    bool approved,
    uint8 v,
    bytes32 r,
    bytes32 s
  ) external payable {
    coffinBox.setMasterContractApproval(user, address(this), approved, v, r, s);
  }

  function createStream(
    address recipient,
    address token,
    uint64 startTime,
    uint64 endTime,
    uint256 amount, /// @dev in token amount and not in shares
    bool fromCoffinBox,
    uint256 minShare
  ) external payable returns (uint256 streamId, uint256 depositedShares) {
    depositedShares = _depositToken(token, msg.sender, address(this), amount, fromCoffinBox);

    if (depositedShares < minShare) revert InsufficientShares();

    (streamId, ) = furoStream.createStream(
      recipient,
      token == address(0) ? wETH : token,
      startTime,
      endTime,
      amount,
      true
    );

    furoStream.updateSender(streamId, msg.sender);
  }

  function _depositToken(
    address token,
    address from,
    address to,
    uint256 amount,
    bool fromCoffinBox
  ) internal returns (uint256 depositedShares) {
    if (fromCoffinBox) {
      depositedShares = coffinBox.toShare(token, amount, false);
      coffinBox.transfer(token, from, to, depositedShares);
    } else {
      (, depositedShares) = coffinBox.deposit{value: token == address(0) ? amount : 0}(token, from, to, amount, 0);
    }
  }
}
