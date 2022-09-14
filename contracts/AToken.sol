// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AToken is ERC20 {
    constructor(uint256 initialAmount) ERC20("aoba aToken", "ATOKEN") {
        _mint(msg.sender, initialAmount);
    }

    event Mint(
        address indexed _to,
        uint256 _value
    );

    function mint(address _account, uint _amount) external {
        require(_amount > 0, 'mint amount must be > 0');
        _mint(_account, _amount);
        emit Mint(_account, _amount);
    }
}
