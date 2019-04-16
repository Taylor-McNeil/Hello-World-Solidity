/*const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
}; */

var Migrations = artifacts.require("./Migrations.sol");
var HelloEthSalon = artifacts.require('./HelloEthSalon.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(HelloEthSalon);
};
