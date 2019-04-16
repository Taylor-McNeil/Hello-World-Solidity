pragma solidity ^0.5.0;


contract HelloEthSalon {
  constructor() public {
  }

  string message = "Hello Etheruem Salon!";

  function GetMessage() public returns (string memory){
    return message;
  }
}
