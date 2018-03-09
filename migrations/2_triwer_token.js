var TriwerToken = artifacts.require("./TriwerToken.sol");

module.exports = function(deployer) {
  deployer.deploy(TriwerToken);
};
