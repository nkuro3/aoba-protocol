import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

import dotenv from "dotenv";
dotenv.config();

// const USDC = process.env.USDC_ADDRESS || '';

describe("ERC20", () => {
  const fixture = async() => {
    // account
    const accounts = await ethers.getSigners();

    // deploy aToken
    const initialAmount = 1000;
    const AToken = await ethers.getContractFactory("AToken");
    const aToken = await AToken.deploy(initialAmount);
    await aToken.deployed();

    // initialize public token
    // const usdc = await ethers.getContractAt("ERC20", USDC);

    // return value
    return { accounts, aToken };
  };

  it('mint', async () => {
    const { accounts, aToken } = await loadFixture(fixture);
    console.log();

    // original amount
    const alice = accounts[1].address;
    const amount = await aToken.balanceOf(alice);
    console.log(`Alice's balance is ${amount} ETH`);
    
    // mint to owner
    const mintAmount = 100;
    await aToken.mint(alice, mintAmount);
    
    // check test
    await expect(await aToken.balanceOf(alice)).to.equals(mintAmount);
    console.log(`Alice's balance is ${await aToken.balanceOf(alice)} ETH`);
  });

  it('burn', async () => {});
  it('transfer', async () => {});
});
