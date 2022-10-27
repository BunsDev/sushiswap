// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;
import "soulswap-core/contracts/uniswapv2/interfaces/ISoulSwapFactory.sol";
import "soulswap-core/contracts/uniswapv2/SoulSwapFactory.sol";

contract SoulSwapFactoryMock is SoulSwapFactory {
    constructor() public SoulSwapFactory(msg.sender) {
        return;
    }
}
