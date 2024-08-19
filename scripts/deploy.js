const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.deployContract("SwisstronikPERC721");
  await contract.waitForDeployment();

  console.log(`SwisstronikPERC721 was deployed to ${await contract.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

