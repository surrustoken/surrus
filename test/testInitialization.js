

var SurrusContract = artifacts.require("SurrusContract");

let token;

contract('SurrusContract', function(accounts) {
  it("contract initialization. totalSypply must be 10000000000000000", function () {
    return SurrusContract.deployed().then(function (instance) {
      return instance.totalSupply.call();
    }).then(function (totalSupply) {
      assert.equal(totalSupply, 10000000000000000, "account[0] must NOT be 10000000000000000");
    });
  });
  it("contract initialization. balance of account[0] must be 10000000000000000", function () {
    return SurrusContract.deployed().then(function (instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 10000000000000000, "account[0] must NOT be 10000000000000000");
    });
  });
  it("contract initialization. balance ofaccount[1] must be 0", function () {
    return SurrusContract.deployed().then(function (instance) {
      return instance.balanceOf.call(accounts[1]);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 0, "account[1] must NOT be 0");
    });
  });
  it("contract initialization. balance ofaccount[2] must be 0", function () {
    return SurrusContract.deployed().then(function (instance) {
      token  = instance;
      return instance.balanceOf.call(accounts[1]);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 0, "account[2] must NOT be 0");
    });
  });
})
