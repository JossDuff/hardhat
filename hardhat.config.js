//only requiring hardhat-waffle here because it depends on hardhat-ethers so adding both isn't necessary.
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
};
