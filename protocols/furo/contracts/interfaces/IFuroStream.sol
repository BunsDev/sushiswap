// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity 0.8.10;

import "./ITasker.sol";
import "./ITokenURIFetcher.sol";
import "./ICoffinBoxMinimal.sol";
import "../utils/Multicall.sol";
import "../utils/BoringOwnable.sol";
import "@rari-capital/solmate/src/tokens/ERC721.sol";

interface IFuroStream {
    function setCoffinBoxApproval(
        address user,
        bool approved,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external payable;

    function createStream(
        address recipient,
        address token,
        uint64 startTime,
        uint64 endTime,
        uint256 amount, /// @dev in token amount and not in shares
        bool fromBento
    ) external payable returns (uint256 streamId, uint256 depositedShares);

    function withdrawFromStream(
        uint256 streamId,
        uint256 sharesToWithdraw,
        address withdrawTo,
        bool toCoffinBox,
        bytes memory taskData
    ) external returns (uint256 recipientBalance, address to);

    function cancelStream(uint256 streamId, bool toCoffinBox)
        external
        returns (uint256 senderBalance, uint256 recipientBalance);

    function updateSender(uint256 streamId, address sender) external;

    function updateStream(
        uint256 streamId,
        uint128 topUpAmount,
        uint64 extendTime,
        bool fromCoffinBox
    ) external payable returns (uint256 depositedShares);

    function streamBalanceOf(uint256 streamId)
        external
        view
        returns (uint256 senderBalance, uint256 recipientBalance);

    function getStream(uint256 streamId) external view returns (Stream memory);

    event CreateStream(
        uint256 indexed streamId,
        address indexed sender,
        address indexed recipient,
        address token,
        uint256 amount,
        uint256 startTime,
        uint256 endTime,
        bool fromCoffinBox
    );

    event UpdateStream(
        uint256 indexed streamId,
        uint128 indexed topUpAmount,
        uint64 indexed extendTime,
        bool fromCoffinBox
    );

    event Withdraw(
        uint256 indexed streamId,
        uint256 indexed sharesToWithdraw,
        address indexed withdrawTo,
        address token,
        bool toCoffinBox
    );

    event CancelStream(
        uint256 indexed streamId,
        uint256 indexed senderBalance,
        uint256 indexed recipientBalance,
        address token,
        bool toCoffinBox
    );

    struct Stream {
        address sender;
        address token;
        uint128 depositedShares;
        uint128 withdrawnShares;
        uint64 startTime;
        uint64 endTime;
    }
}
