// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;
import "../CoffinBox.sol";

// An example a contract that stores tokens in the CoffinBox.
// A single contract that users can approve for the CoffinBox, hence the registerProtocol call.
// PS. This isn't good code, just kept it simple to illustrate usage.
contract HelloWorld {
    CoffinBox public bentoBox;
    IERC20 public token;

    constructor(CoffinBox _bentoBox, IERC20 _token) public {
        bentoBox = _bentoBox;
        token = _token;
        bentoBox.registerProtocol();
    }

    mapping(address => uint256) public bentoBoxShares;

    // Deposits an amount of token into the CoffinBox. CoffinBox shares are given to the HelloWorld contract and
    // assigned to the user in bentoBoxShares.
    // Don't deposit twice, you'll lose the first deposit ;)
    function deposit(uint256 amount) public {
        (, bentoBoxShares[msg.sender]) = bentoBox.deposit(token, msg.sender, address(this), amount, 0);
    }

    // This will return the current value in amount of the CoffinBox shares.
    // Through flash loans and maybe a strategy, the value can go up over time.
    function balance() public view returns (uint256 amount) {
        return bentoBox.toAmount(token, bentoBoxShares[msg.sender], false);
    }

    // Withdraw all shares from the CoffinBox and receive the token.
    function withdraw() public {
        bentoBox.withdraw(token, address(this), msg.sender, 0, bentoBoxShares[msg.sender]);
    }
}
