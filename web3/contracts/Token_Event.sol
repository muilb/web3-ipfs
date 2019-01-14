pragma solidity ^0.4.16;

contract Token {
    event GetBalance(address indexed from, uint256 balance);

    function getBalance() public {
        //public constant returns (address, uint256)
        GetBalance(msg.sender, msg.sender.balance);
//        return (msg.sender, msg.sender.balance);
//        emit Deposit(msg.sender, _id, msg.value);
    }
}
