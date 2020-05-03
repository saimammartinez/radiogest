const helpers={};

helpers.isAutenticated=(req, res, next)=>{
    if(req.isAuthenticated()){
        if(req.user.admin == 'on'){
            return next();
        }
    };
    res.redirect('/users/login')
}
module.exports = helpers;

