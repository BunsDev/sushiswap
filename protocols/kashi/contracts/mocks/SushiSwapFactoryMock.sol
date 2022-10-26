// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;
import "soulswap-core/contracts/uniswapv2/interfaces/IUniswapV2Factory.sol";
import "soulswap-core/contracts/uniswapv2/UniswapV2Factory.sol";

contract SushiSwapFactoryMock is UniswapV2Factory {
    constructor() public UniswapV2Factory(msg.sender) {
        return;
    }
}
