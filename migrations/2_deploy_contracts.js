const Router = artifacts.require("CactiRouter01.sol");
const WETH = artifacts.require("WETH9.sol");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = "0x91Fb4fdc2b58C9caA8c4Be4d8F27a5C106bcc80b";

  if (network === "matic") {
    weth = await WETH.at("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
  } else {
    await deployer.deploy(WETH);
    weth = await WETH.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
