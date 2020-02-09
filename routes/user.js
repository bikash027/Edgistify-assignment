const express=require('express');
const hash=require('pbkdf2-password')();
const User=require('../models/User');
const router=express.Router();
router.post('/login',(req,res,next)=>{
	console.log("logging in");
	User.findOne({
		email: req.body.email
	})
	.then(user=>{
		authenticate(req,user,(err,user)=>{
			if(user){
				req.session.userId=user._id;
				console.log("hi");
				res.status(200).json({message:"successfully logged in"});
			}
			else{
				// throw err;
				res.status(500).json({error: "something went wrong"});
			}
		});
	})
	.catch(err=>{
		// res.render('pages/login.ejs',{error: "something went wrong. Please login again"});
		console.log(err);
		res.status(500).json({error: "something went wrong"});
	});
});

router.post('/register',(req,res,next)=>{
	hash({password: req.body.password},(err, pass, salt, hash)=>{
		User.create({
			fullName: req.body.fullName,
			userName: req.body.userName,
			email: req.body.email,
			salt: salt,
			hash: hash
		})
		.then(newUser => {
		  console.log("user's auto-generated ID:", newUser._id);
		  authenticate(req,newUser,(err,user)=>{
			if(user){
				req.session.userId=user._id;
				console.log("hi");
				res.status(200).json({message:"successfully logged in"});
			}
			else{
				// throw err;
				console.log(err);
				res.status(500).json({error: "something went wrong"});
			}
		  });
		})
		.catch((err)=>{
			console.log(err);
			res.status(500).json({error: "something went wrong"});
		})
	})
});


router.get('/isLoggedIn',(req,res)=>{
	const ob={
		isLoggedIn: (req.session.userId)? true: false
	}
	res.status(200).json(ob);
})

router.post('/logout',(req,res)=>{
	req.session.destroy(function(){
		res.status(200).json({message:"logged out"});
	});
})

function authenticate(req,user,fn){
	// console.log(req.body.password);
	hash({password: req.body.password, salt: user.salt},(err, pass, salt, hash)=>{
		if(err)
			return fn(err);
		// console.log(hash, user.hash.toString());
		if(hash==user.hash)
			return fn(null,user);
		else
			fn(new Error('invalid password'));

	});
}
module.exports=router;