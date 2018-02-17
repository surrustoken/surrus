
var SurrusContract = artifacts.require("SurrusContract");

contract('SurrusContract', function(accounts) {
  let token;

  /*********ТЕСТ НЕ ДОЛЖЕН ПРОХОДИТЬ! Ошибка opcode**********/

  it(" transfer 1 000 000 000 tokens to accounts[2] from accounts[1].Account[1] don't have token!!", function () {
    return SurrusContract.deployed().then(function (instance) {
      token = instance;
      return token.transfer(accounts[2], 1000000000,{from: accounts[1]}).then(function(){
      }).then(function(){
        return token.balanceOf.call(accounts[2]).then(function (balance) {
          assert.equal(balance.valueOf(), 1000000000, "/********* THE TEST MUST NOT BE DONE! Error opcode. Empty balance **********/")
        })
      })
    })
  })

  it("Send  negative value", function () {
  return  token.transfer(accounts[2], -2000).then(function () {
      return token.balanceOf.call(accounts[1]);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 200000, "/********* THE TEST MUST NOT BE DONE! Error opcode. Since the negative value **********/");
      return token.balanceOf.call(accounts[2]);
    })
  });
  it("transfer 2 000 000 000 tokens to accounts[1] from accounts[0].Account[0] have only 2 000 000 000 tokens !!", function () {
    return  token.transfer(accounts[1], 20000000000000000).then(function () {
      return token.balanceOf.call(accounts[1]);
    }).then(function (balance) {
      assert.equal(balance.valueOf(), 20000000000000000, "/********* THE TEST MUST NOT BE DONE! Error opcode. Transfer more than necessary **********");
      return token.balanceOf.call(accounts[2]);
    })
  });
  });
