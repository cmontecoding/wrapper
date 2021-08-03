const { expect } = require("chai");
//import { MockProvider } from 'ethereum-waffle';
const { MockProvider } = require('ethereum-waffle');
//const provider = new MockProvider();
const {deployMockContract} = require('@ethereum-waffle/mock-contract');
const {waffleChai} = require('@ethereum-waffle/chai');

//const Link = require('../build/LinkJson');

  //let mockLink, link;

  describe("WrapperMock", () => {

    async function setup() {

  const provider = new MockProvider();
  const [wallet, otherWallet] = provider.getWallets();
//  let Wrapper, wrapper, ownerAddress;
  //IERC20 link = IERC20(0x01BE23585060835E02B77ef475b0Cc51aA1e0709);

  const Link = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];


  const mockLink = await deployMockContract(wallet, Link);
  //console.log(mockLink);
  //console.log("here");

	const linkAddress = mockLink.address;
  
	const Sun = await ethers.getContractFactory("Suncoin");
	const sun = await Sun.deploy('suncoin3', 'SNC');
	[owner, addr1, addr2, _] = await ethers.getSigners();
	const ownerAddress = owner.address;
	const suncoinAddress = sun.address;
	console.log(suncoinAddress);
	console.log(ownerAddress);

  	const Wrapper = await ethers.getContractFactory("wrapper");
  	const wrapper = await Wrapper.deploy("125", "125", suncoinAddress, linkAddress);

	return {mockLink, sun, wrapper, ownerAddress};

  }  


  before(async () => {

	//const provider = new MockProvider();
	//const [wallet, otherWallet] = provider.getWallets();
	//const Link =[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];

	//mockLink = await deployMockContract(wallet, Link);
/*
	const mockLink = await setup();
	const linkAddress = mockLink.address;
	console.log("linkAddress in the before:", linkAddress);
	//link = LinkTokenInterface(linkAddress);


	Sun = await ethers.getContractFactory("Suncoin");
	sun = await Sun.deploy('suncoin3', 'SNC');
	[owner, addr1, addr2, _] = await ethers.getSigners();
	ownerAddress = owner.address;
	suncoinAddress = sun.address;
	console.log(suncoinAddress);

  	Wrapper = await ethers.getContractFactory("wrapper");
  	wrapper = await Wrapper.deploy("125", "125", suncoinAddress, linkAddress);
*/
  });

  it("wrap", async function () {
//test comment here
	  //test2
	const {wrapLink, sun, wrapper, ownerAddress} = await setup();

	//expect(await sun.balanceOf(owner.address)).to.equal(0);
	await wrapper.wrap({value:5});
	expect(await sun.balanceOf(owner.address)).to.equal(5);

	//console.log(await provider.getBalance(wrapper.address));
	//expect(await provider.getBalance(wrapper.address)).to.equal(5);

  });

  it("unwrap", async function () {

	const {mockLink, ownerAddress, sun, wrapper} = await setup();

	sun.approve(wrapper.address, 5);
	expect(await sun.balanceOf(owner.address)).to.equal(5);
	await wrapper.unwrap(5);
	expect(await sun.balanceOf(owner.address)).to.equal(0);
	//expect(await provider.getBalance(owner.address)).to.equal(5);
	//console.log(await provider.getBalance(wallet.address));

  });

  it("wrapLink", async function () {

	//const mockLink = await deployMockContract(wallet, Link);
	const {mockLink, ownerAddress, sun, wrapper} = await setup();

	console.log("mock link address:", mockLink.address);

//	console.log(mockLink);
	await mockLink.mock.approve.withArgs(wrapper.address, 20);
	expect(await sun.balanceOf(owner.address)).to.equal(0);
	await mockLink.mock.balanceOf.returns('20');
	expect(await mockLink.balanceOf(owner.address)).to.equal(20);
	await mockLink.mock.transferFrom.revertsWithReason("my mocked revert");

	await wrapper.wrapLink(20);
	expect(await sun.balanceOf(owner.address)).to.equal(20);
	expect(await mockLink.balanceOf(owner.address)).to.equal(0);

  });

/*
  it("unwrapLink", async function () {

	await sun.approve(wrapper.address, 20);
	expect(await sun.balanceOf(owner.address)).to.equal(20);
	//expect(await link.balanceOf(owner.address)).to.equal(20);
	await wrapper.unwrapLink(20);
	expect(await sun.balanceOf(owner.address)).to.equal(0);
	//expect(await link.balanceOf(owner.address)).to.equal(0);

  });
*/
  });
//});


