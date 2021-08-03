const hre = require("hardhat");

async function main() {
	  const [deployer] = await ethers.getSigners();
	  console.log ('Deploying contracts with the account:');
	  console.log (deployer.address);

	  const Sun = await hre.ethers.getContractFactory("ERC20");

	  const sun = await Sun.deploy('ERC20', {
		              from: Sun,
		              args: ['suncoin3', 'SNC'],
		              log: true,
		            });

	  console.log("suncoin.sol deployed");

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
	          console.error(error);
	          process.exit(1);
  });

