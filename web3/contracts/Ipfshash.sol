pragma solidity ^0.4.24;

contract IpfsHash {

    string ipfsHash;

    constructor(string x) public {
        ipfsHash = x;
    }

    function getHash() public view returns (string x) {
        return ipfsHash;
    }
}
