var proxies = require('../proxies');
var User = proxies.User;
exports.home=function(req,res,next){
	console.log(req.session);
	res.locals.User=req.session.User;
	res.render('index', { title: '用户中心' });
}