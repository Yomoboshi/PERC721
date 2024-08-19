const hre = require("hardhat");
const utils = require("../utils/utils.js")

async function main() {
  const contractAddress = "0xcc17B9e0a1c4DB4c31cf0E23dbE1c68879aE9EE5";
  const [signer] = await hre.ethers.getSigners();

  const contractFactory = await hre.ethers.getContractFactory("SwisstronikPERC721");
  const contract = contractFactory.attach(contractAddress);

  const mint = await utils.sendShieldedTransaction(
    signer,
    contractAddress,
    contract.interface.encodeFunctionData("safeMint",[signer.address,"9876"]),
    0
  );

  await mint.wait();

  console.log("Transaction Receipt: ", mint.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});