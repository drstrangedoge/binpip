var mongoose = require('mongoose');
  
var accountModel = {
  username: String,
  password: String,
  email: String,
  address: String,
  sent: [{amount: Number, date: {type: Date, default: Date.now}}],
  donated: [{amount: Number, date: {type: Date, default: Date.now}}],
  createdAt: {type: Date, default: Date.now}
};
var accountSchema = mongoose.Schema(accountModel);

var Account = mongoose.model('Account', accountSchema);

module.exports = {
  createAccount: function createAccount(username, password, email, address, callback) {
    new Account({
      username: username,
      password: password,
      email: email,
      address: address
    }).save(callback);
  },
  findByUsername: function findByUsername(username, callback) {
	Account.findOne({username: username}, callback);
  },
  findByAddress: function findByAddress(address, callback) {
	Account.findOne({address: address}, callback);
  },
  getAll: function getAll(callback) {
	Account.find(/[\s\S]*/, callback);
  }
};