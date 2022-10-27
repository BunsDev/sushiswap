// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity >=0.8.11;

import "../adapters/CoffinAdapter.sol";
import "../adapters/TokenAdapter.sol";
import "../adapters/SoulLegacyAdapter.sol";
import "../adapters/TridentSwapAdapter.sol";
import "../adapters/StargateAdapter.sol";

interface ISoulXSwap {
    function cook(
        uint8[] memory actions,
        uint256[] memory values,
        bytes[] memory datas
    ) external payable;
}