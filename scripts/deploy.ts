import { ethers } from "hardhat";

// check by local
const deploy = async () => {
  const AToken = await ethers.getContractFactory("AToken");
  const initialAmount = 1000;
  const aToken = await AToken.deploy(initialAmount);
  await aToken.deployed();
  console.log(`AToken is deployed with ${initialAmount} ETH`);

  const accounts = await ethers.getSigners();
  const owner = accounts[0].address;
  const account1 = accounts[1].address;
  console.log(`owner's balance is ${await aToken.balanceOf(owner)}  ETH`);
  console.log(`account1's balance is ${await aToken.balanceOf(account1)}  ETH`);
}

deploy().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
