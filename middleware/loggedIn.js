module.exports = function(req, res, next){
	if(!req.user){
		req.flash('error', 'Back off bro, ya gotta log in')
		res.redirect('/auth/login');
	}
	else {
		next(); 
	}
}