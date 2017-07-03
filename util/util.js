module.exports.add = function(a, b) {
  return a + b;
}

module.exports.square = function(x){ return x * x}

module.exports.setName = function(user, fullName){
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
