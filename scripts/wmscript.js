
const hre = require("hardhat");


async function main() {

	const [deployer] = await ethers.getSigners();
	console.log ('Deploying contracts with the account:');
	console.log (deployer.address);

	const Sun = await hre.ethers.getContractFactory("Suncoin");

	const sun = await Sun.deploy('Suncoin', {
			    from: Sun,
			    args: ['suncoin3', 'SNC'],
			    log: true,
			  });
	console.log("suncoin.sol deployed");

	const suncoinAddress = sun.address;
	console.log("suncoinAddress:");
	console.log(suncoinAddress);

	const Wrapper = await hre.ethers.getContractFactory("wrapper");
	const wrapper = await Wrapper.deploy("125", "125", suncoinAddress);

	console.log("wrappermock.sol deployed");
	const wrappermockAddress = wrapper.address;
	console.log("wrappermockAddress:");
	console.log(wrappermockAddress);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
	console.error(error);
	process.exit(1);
});


