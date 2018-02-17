/**
 * run tests separately from each other
 * @type {*|Object}
 */
var SurrusContract = artifacts.require("SurrusContract");

 contract('SurrusContract', function(accounts) {
  let contractInstance;
  it("account don't permission call burnOwner function", function () {
    return SurrusContract.deployed().then(function (instance) {
      contractInstance = instance;
      return contractInstance.transfer(accounts[1], 3000000000000).then(function(){
      }).then(function () {
        return instance.balanceOf.call(accounts[1]);
      }).then(function (balance) {
        assert.equal(balance.valueOf(), 3000000000000, "Transfer is not success");
      }).then(function () {
        instance.burnByOwner(accounts[2],{from: accounts[1]})
        return instance.balanceOf.call(accounts[1]);
      }).then(function (balance) {
      assert.equal(balance.valueOf(), 3000000000000, "/*********ТЕСТ НЕ ДОЛЖЕН ПРОХОДИТЬ! Ошибка opcode.Нет полномочий что бы вызвать эту функцию**********/");
    })
  })
})

  it("sold less than  6 000 000, 000 000 000 tokens", function () {
    return SurrusContract.deployed().then(function (instance) {
      contractInstance = instance;
      return contractInstance.transfer(accounts[1], 5000000000000000).then(function(){
      }).then(function () {
        return instance.balanceOf.call(accounts[1]);
      }).then(function (balance) {
        assert.equal(balance.valueOf(), 5000000000000000, "Transfer is not success");
      }).then(function () {
        instance.burnByOwner(accounts[2])
        return instance.balanceOf.call(accounts[0]);
      }).then(function (balance) {
        assert.equal(balance.valueOf(), 0, "main account must have null balance");
        return instance.balanceOf.call(accounts[2]);
      }).then(function (balance) {
        assert.equal(balance.valueOf(), 2000000000000000, "account for command must have 40% of sale token. it equals 2 000 000 000 000 000 ");
      })
    })
  })

   it("sold more than  6 000 000, 000 000 000 tokens", function () {
     return SurrusContract.deployed().then(function (instance) {
        contractInstance1 = instance;
       return contractInstance1.transfer(accounts[1], 7000000000000000).then(function(){
       }).then(function () {
         return instance.balanceOf.call(accounts[1]);
       }).then(function (balance) {
         assert.equal(balance.valueOf(), 7000000000000000, "Transfer is not success");
       }).then(function () {
         instance.burnByOwner(accounts[2])
         return instance.balanceOf.call(accounts[0]);
       }).then(function (balance) {
         assert.equal(balance.valueOf(), 0, "main account must have null balance");
         return instance.balanceOf.call(accounts[2]);
       }).then(function (balance) {
         assert.equal(balance.valueOf(), 3000000000000000, "account for command must have 40% of sale token. it equals 3200000000000000 ");
       })
     })
   })

   it("sold equal  6 000 000, 000 000 000 tokens", function () {
     return SurrusContract.deployed().then(function (instance) {
       contractInstance1 = instance;
       return contractInstance1.transfer(accounts[1], 6000000000000000).then(function(){
       }).then(function () {
         return instance.balanceOf.call(accounts[1]);
       }).then(function (balance) {
         assert.equal(balance.valueOf(), 6000000000000000, "Transfer is not success");
       }).then(function () {
         instance.burnByOwner(accounts[2])
         return instance.balanceOf.call(accounts[0]);
       }).then(function (balance) {
         assert.equal(balance.valueOf(), 0, "main account must have null balance");
         return instance.balanceOf.call(accounts[2]);
       }).then(function (balance) {
         assert.equal(balance.valueOf(), 4000000000000000, "account for command must have 40% of sale token. it equals 3200000000000000 ");
       })
     })
   })


   it("sold equal  10 000 000, 000 000 000 tokens", function () {
     return SurrusContract.deployed().then(function (instance) {
       contractInstance1 = instance;
       return contractInstance1.transfer(accounts[1], 10000000000000000).then(function(){
       }).then(function () {
         return instance.balanceOf.call(accounts[1]);
       }).then(function (balance) {
         assert.equal(balance.valueOf(), 10000000000000000, "Transfer is not success");
       }).then(function () {
         instance.burnByOwner(accounts[2])
         return instance.balanceOf.call(accounts[0]);
       }).then(function (balance) {
         assert.equal(balance.valueOf(), 0, "main account must have null balance");
         return instance.balanceOf.call(accounts[2]);
       }).then(function (balance) {
         assert.equal(balance.valueOf(), 0, "account for command must have 40% of sale token. it equals 3200000000000000 ");
       })
     })
   })
})