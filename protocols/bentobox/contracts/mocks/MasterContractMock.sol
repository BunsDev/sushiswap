// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.6.12;

import "@boringcrypto/boring-solidity/contracts/interfaces/IMasterContract.sol";
import "../CoffinBox.sol";

contract MasterContractMock is IMasterContract {
    CoffinBox public immutable bentoBox;

    constructor(CoffinBox _bentoBox) public {
        bentoBox = _bentoBox;
    }

    function deposit(IERC20 token, uint256 amount) public {
        bentoBox.deposit(token, msg.sender, address(this), 0, amount);
    }

    function init(bytes calldata) external payable override {
        return;
    }
}
