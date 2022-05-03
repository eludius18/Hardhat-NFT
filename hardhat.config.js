require("@nomiclabs/hardhat-ethers");
require('dotenv').config()
 
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "ropsten",
    networks: {
        hardhat: {
            // // If you want to do some forking, uncomment this
            // forking: {
            //   url: MAINNET_RPC_URL
            // }
        },
        localhost: {
        },
        ropsten: {
            url: process.env.RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
            saveDeployments: true,
        }
    },
  solidity: "0.8.4",
};