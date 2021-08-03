require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_PRIVATE_KEY = "29e7aae8f652cb5de96b463e4b2a9618f42eaa1f7821d4495c52bf1588c42895";
const INFURA_URL = "https://rinkeby.infura.io/v3/81ba30e5e0e44b1481986560153dcaf4";

module.exports = {
  "scripts": {
	  "build": "waffle"
  },
  solidity: "0.8.0",
  networks: {
	      rinkeby: {
		      url: INFURA_URL,
			          accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
		          },
	    },
};
