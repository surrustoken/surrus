var SurrusContract = artifacts.require("SurrusContract");

contract('SurrusContract', function(accounts) {
  it("initialize Smart Contract", function () {
    return SurrusContract.deployed().then(function (instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 10000000000000000, "account[0]  don't have 10000000000000000 tokens");
    });
  });
  it("burn tokens 3 000 000 000 000", function () {
    return SurrusContract.deployed().then(function (instance) {
      instance.burn(3000000000000)
      return instance.balanceOf.call(accounts[0]);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 9997000000000000, "account[1] must have 200000");
    });
  });
})
