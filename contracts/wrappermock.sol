// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";
import "./link.sol";

contract wrapper {
    IERC20 suncoin;
    LinkTokenInterface link;
    uint bpWrapFee;
    uint bpUnwrapFee;
    address owner;

    constructor(uint bpWrapFeeInput, uint bpUnwrapFeeInput, address suncoinAddressInput, address linkAddressInput) {
	suncoin = IERC20(suncoinAddressInput);
	link = LinkTokenInterface(linkAddressInput);
	owner = msg.sender;
        changeWrapFee(bpWrapFeeInput);
        changeUnwrapFee(bpUnwrapFeeInput);

    }

    
    modifier onlyOwner {
      require(msg.sender == owner);
      _;
    }
    
    function changeWrapFee(uint bpWrapFeeInput) public onlyOwner {
        
        bpWrapFee = bpWrapFeeInput;
        require(bpWrapFee <= 10000, "wrap fee percentage more than 100");

    }
    
    function changeUnwrapFee(uint bpUnwrapFeeInput) public onlyOwner {
        
        bpUnwrapFee = bpUnwrapFeeInput;
        require(bpUnwrapFee <= 10000, "unwrap fee percentage more than 100");
        
    }

    
    function wrap() public payable {
        
        uint amountWithFee = (msg.value * (10000 - bpWrapFee)) /10000;


	suncoin.mint(address(this), msg.value);
        suncoin.transfer(address(msg.sender), msg.value);
        
    }
    
    //3. implement an unwrap() function that takes SNC from the caller, burns it, and returns ETH (or link if you did no. 2)
    function unwrap(uint amount) public {
        
        uint amountWithFee = (amount * (10000 - bpUnwrapFee)) /10000;
        
        suncoin.transferFrom(msg.sender, address(this), amount);
        suncoin.burn(address(this), amount);
        
        payable(msg.sender).transfer(amountWithFee);
        
    }
    
    //2. implement link for SNC
    function wrapLink(uint amount) public {

        uint amountWithFee = (amount * (10000 - bpWrapFee)) /10000;

	

        link.transferFrom(msg.sender, address(this), amount);

	require(false, "debug");

        suncoin.transfer(address(msg.sender), amount);
        
    }
    
    // SNC for link
    function unwrapLink(uint amount) public {
        
        uint amountWithFee = (amount * (10000 - bpUnwrapFee)) /10000;
        
        suncoin.transferFrom(msg.sender, address(this), amount);
        link.transfer(address(msg.sender), amount);

    }
}

