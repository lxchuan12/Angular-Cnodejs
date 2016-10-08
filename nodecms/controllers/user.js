var proxies = require('../proxies');
var User = proxies.User;

exports.login=function(req,res,next){	
	res.render('login', { title: 'Express login' });	
}

exports.dologin=function(req,res,next){
	var user_name=req.body.user_name;
	var user_pwd=req.body.user_pwd;
	console.log(user_name);
	var UserObj={
		'user_name':user_name,
		'user_pwd':user_pwd
	};
	console.log('e');
	User.findOne({'user_name':user_name},function(err,UserInfo){
		console.log('d');
		console.log(UserInfo);
		if(UserInfo){
			console.log('a');
			if(UserInfo.user_pwd==user_pwd){
				console.log('b');
				req.session.User=UserObj;
				res.redirect('/');
			}else{					
				console.log('c');
			}
		}else{
			res.locals.error="用户名不存在";				
		}
	});
}
exports.register=function(req,res,next){
	res.render('register', { title: 'Express register' });	
}

exports.doregister=function(req,res,next){
	var user_name=req.body.user_name;
	var user_pwd=req.body.user_pwd;
	var UserObj={
		'user_name':user_name,
		'user_pwd':user_pwd
	};
    User.addUser(UserObj,function(err,UserInfo){
		if(err){
			return next(err);
		}
	});
	req.session.User=UserObj;
	res.redirect('/');					
	return;
}

exports.logout=function(req,res,next){
	req.session.User="";
	res.redirect('/');
}

function requiredAuthentication(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.redirect('/login');
    }
}

function userExist(req, res, next) {
    User.count({
        user_name: req.body.user_name
    }, function (err, count) {
        if (count === 0) {
            next();
        } else {
            req.session.error = "User Exist"
            res.redirect("/login");
        }
    });
}