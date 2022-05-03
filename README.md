# Create Hardhat Project

```shell
npx hardhat
```
Create a basic simple project

# Install the OpenZeppelin library and Typscript

```shell
npm install @openzeppelin/contracts
```

```shell
npm install --save-dev @types/node
```

# Create ERC721 Smart Contract

contracts/MyCryptoLions.sol

# Compiling the Smart Contract

```shell
npx hardhat compile
```

# Testing Smart Contracts

Create MyCryptoLions-test.js in Test Folder

Run Test

```shell
npx hardhat test
```

# Deploy Smart Contracts

1. Create dotenv

```shell
RPC_URL=''
PRIVATE_KEY=''
```

3. Install dotenv

```shell
yarn add dotenv
```
3. Add dotenv info

4. Install @nomiclabs/hardhat-etherscan

```shell
yarn add @nomiclabs/hardhat-etherscan
```

5. Configure hardhat.config.js

6. Create deploy.js in scripts/deploy.js

6. Deploy

```shell
npx hardhat run scripts/deploy.js
```

