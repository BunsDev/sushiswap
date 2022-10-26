// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12;
import "soulswap-core/contracts/uniswapv2/UniswapV2Pair.sol";

contract SushiSwapPairMock is UniswapV2Pair {
    constructor() public UniswapV2Pair() {
        return;
    }
}
