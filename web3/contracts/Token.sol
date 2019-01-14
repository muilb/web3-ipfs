pragma solidity ^0.4.16;

contract Token {
    mapping (address => uint) public balances;

//    function Token() {
//        balances[msg.sender] = 1000000;
//    }

//    function transfer(address _to, uint _amount) {
//        if (balances[msg.sender] < _amount) {
//            throw;
//        }
//
//        balances[msg.sender] -= _amount;
//        balances[_to] += _amount;
//    }

    function getBalance() public constant returns (address, uint256, uint256) {
        uint256 balance = balances[msg.sender];
        return (msg.sender, balance, msg.sender.balance);
    }
}
