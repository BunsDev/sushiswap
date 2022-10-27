// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity >=0.8.11;

import "../interfaces/ICoffinBoxMinimal.sol";
import "../base/ImmutableState.sol";

/// @title CoffinAdapter
/// @notice Adapter which provides all functions of CoffinBox require by this contract.
/// @dev These are generic functions, make sure, only msg.sender, address(this) and address(coffinBox)
/// are passed in the from param, or else the attacker can sifu user's funds in coffinbox.
abstract contract CoffinAdapter is ImmutableState {
    /// @notice Deposits the token from users wallet into the CoffinBox.
    /// @dev Make sure, only msg.sender, address(this) and address(coffinBox)
    /// are passed in the from param, or else the attacker can sifu user's funds in coffinbox.
    /// Pass either amount or share.
    /// @param token token to deposit. Use token as address(0) when depositing native token
    /// @param from sender
    /// @param to receiver
    /// @param amount amount to be deposited
    /// @param share share to be deposited
    /// @param value native token value to be deposited. Only use when token address is address(0)
    function _depositToCoffinBox(
        address token,
        address from,
        address to,
        uint256 amount,
        uint256 share,
        uint256 value
    ) internal {
        coffinBox.deposit{value: value}(token, from, to, amount, share);
    }

    /// @notice Transfers the token from coffinbox user to another or withdraw it to another address.
    /// @dev Make sure, only msg.sender, address(this) and address(coffinBox)
    /// are passed in the from param, or else the attacker can sifu user's funds in coffinbox.
    /// Pass either amount or share.
    /// @param token token to transfer. For native tokens, use wnative token address
    /// @param from sender
    /// @param to receiver
    /// @param amount amount to transfer
    /// @param share share to transfer
    /// @param unwrapCoffin use true for withdraw and false for transfer
    function _transferFromCoffinBox(
        address token,
        address from,
        address to,
        uint256 amount,
        uint256 share,
        bool unwrapCoffin
    ) internal {
        if (unwrapCoffin) {
            coffinBox.withdraw(token, from, to, amount, share);
        } else {
            if (amount > 0) {
                share = coffinBox.toShare(token, amount, false);
            }
            coffinBox.transfer(token, from, to, share);
        }
    }
}