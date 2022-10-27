// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;
import "../CoffinBox.sol";

// An example a contract that stores tokens in the CoffinBox.
// A single contract that users can approve for the CoffinBox, hence the registerProtocol call.
// PS. This isn't good code, just kept it simple to illustrate usage.
contract HelloWorld {
    CoffinBox public coffinBox;
    IERC20 public token;

    constructor(CoffinBox _coffinBox, IERC20 _token) public {
        coffinBox = _coffinBox;
        token = _token;
        coffinBox.registerProtocol();
    }

    mapping(address => uint256) public coffinBoxShares;

    // Deposits an amount of token into the CoffinBox. CoffinBox shares are given to the HelloWorld contract and
    // assigned to the user in coffinBoxShares.
    // Don't deposit twice, you'll lose the first deposit ;)
    function deposit(uint256 amount) public {
        (, coffinBoxShares[msg.sender]) = coffinBox.deposit(token, msg.sender, address(this), amount, 0);
    }

    // This will return the current value in amount of the CoffinBox shares.
    // Through flash loans and maybe a strategy, the value can go up over time.
    function balance() public view returns (uint256 amount) {
        return coffinBox.toAmount(token, coffinBoxShares[msg.sender], false);
    }

    // Withdraw all shares from the CoffinBox and receive the token.
    function withdraw() public {
        coffinBox.withdraw(token, address(this), msg.sender, 0, coffinBoxShares[msg.sender]);
    }
}
