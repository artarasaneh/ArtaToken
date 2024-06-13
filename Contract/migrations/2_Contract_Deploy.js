const Token = artifacts.require("Token");



module.exports = function(deployer) {
    deployer.deploy(Token, 'Arta', 'ART', 2, 100000000, 200000000);

};