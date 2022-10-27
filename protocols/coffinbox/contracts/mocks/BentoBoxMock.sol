// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;
import "../CoffinBox.sol";

contract CoffinBoxMock is CoffinBox {
    constructor(IERC20 weth) public CoffinBox(weth) {
        return;
    }

    function addProfit(IERC20 token, uint256 amount) public {
        token.safeTransferFrom(msg.sender, address(this), amount);
        totals[token].addElastic(amount);
    }
}
