// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.6.12;

import "@boringcrypto/boring-solidity/contracts/interfaces/IMasterContract.sol";
import "../CoffinBox.sol";

contract MasterContractMock is IMasterContract {
    CoffinBox public immutable coffinBox;

    constructor(CoffinBox _coffinBox) public {
        coffinBox = _coffinBox;
    }

    function deposit(IERC20 token, uint256 amount) public {
        coffinBox.deposit(token, msg.sender, address(this), 0, amount);
    }

    function init(bytes calldata) external payable override {
        return;
    }
}
