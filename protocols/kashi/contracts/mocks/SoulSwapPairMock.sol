// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;
import "soulswap-core/contracts/SoulSwap/SoulSwapPair.sol";

contract SoulSwapPairMock is SoulSwapPair {
    constructor() public SoulSwapPair() {
        return;
    }
}
