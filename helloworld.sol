// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract helloworld {

  string public message = "Hello World";

  function update(string memory newMessage) public {
    message = newMessage;
  }
}