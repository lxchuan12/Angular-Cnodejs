var User = require('../models').User;

exports.addUser=function(UserObj,callback){
	var user=new User();
	for(var property in UserObj){
		if(UserObj[property]){
			user[property]=UserObj[property];
		}
	}
	user.save(function(err,number){
		if(err){
			return callback(err,null);
		}
	});
};

exports.findOne=function(condition,callback){
	User.findOne(condition,callback);
};

exports.remove=function(condition,callback){
	User.remove(condition,callback);
};

exports.clean=function(callback){
	User.remove({},callback);
};

exports.count=function(condition,callback){
	return User.count(condition,callback);
};
