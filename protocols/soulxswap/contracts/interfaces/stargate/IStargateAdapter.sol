// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.11;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "../../base/ImmutableState.sol";
import "../ISoulXSwap.sol";
import "./IStargateReceiver.sol";
import "./IStargateWidget.sol";

interface IStargateAdapter {}