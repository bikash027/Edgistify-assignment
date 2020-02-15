const express=require('express');
const hash=require('pbkdf2-password')();
const User=require('../models/User');
const router=express.Router();
const Post=require('../models/Post');
const multer=require('multer');
const Jimp=require('jimp');
const path=require('path');
const crypto=require('crypto');
const sendMail=require('../mail2');

const storage=multer.diskStorage({
	destination: (process.env.NODE_ENV==='development')?'client/public/uploads':'client/build/uploads',
	filename: function(req,file,cb){
		cb(null,file.fieldname + '_' + Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({
	storage: storage
 }).single('profile');

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
				res.status(500).send(err.message);
			}
		});
	})
	.catch(err=>{
		console.log(err);
		res.status(500).send(err.message);
	});
});

router.post('/register',(req,res,next)=>{
	hash({password: req.body.password},(err, pass, salt, hash)=>{
		User.create({
			fullName: req.body.fullName,
			userName: req.body.userName,
			email: req.body.email,
			salt: salt,
			hash: hash,
			random: crypto.randomBytes(10).toString("hex"),
			verified: false
		})
		.then(newUser => {
			authenticate(req,newUser,(err,user)=>{
				if(user){
					req.session.userId=user._id;
					res.status(200).json({userId:user._id});
				}
				else{
					// throw err;
					console.log(err);
					res.status(500).send(err.message);
				}
			});
		})
		.catch((err)=>{
			console.log(err);
			res.status(500).send(err.message);
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
});

function loginRequired(req,res,next){
	if(req.session.userId)
        next();
    else
        res.status(500).send('not logged in');
}

router.get('/profile/:id',loginRequired,(req,res)=>{
	let _user='';
	User.findOne({_id: req.params.id})
	.then(user=>{
		_user=user;
		return Post.countDocuments({User: user._id,contentType: 'post'})
	})
	.then(count=>{
		// console.log(req.session.userId,_user._id);
		const profile={
			userName: _user.userName,
			fullName: _user.fullName,
			image:_user.image,
			owner: (req.session.userId.toString()==_user._id.toString()),
			countPost: count,
			_id: _user._id,
		}
		res.status(200).json({profile});
	})
	.catch(err=>{
		console.log(err);
		res.status(500).send(err.message);
	})
})

router.post('/image/:id',loginRequired,(req,res)=>{
	if(!(req.session.userId==req.params.id))
		res.status(500).send('access denied');
	else{
		User.findOne({_id: req.params.id})
		.then(user=>{
			upload(req,res,(err)=>{
				if(err){
					console.log(err);
					res.status(500).send(err.message);
				}
				else{
					let imgPath=(process.env.NODE_ENV==='production')?'./client/build/uploads/'
									:'./client/public/uploads/';
					user.image=req.file.filename;
					user.save()
					.then(()=>{
						return Jimp.read(`${imgPath}${req.file.filename}`)
						// res.status(200).json({message: 'image successfully added'});
					})
					.then(image=>{
						image.resize(75,Jimp.AUTO)
						.write(`${imgPath}minified-${req.file.filename}`)
					})
					.catch(err=>{
						console.log(err);
						res.status(500).send(err.message);
					})
				}
			})
		})
		.catch(err=>{
			console.log(err);
			res.status(500).send(err.message);
		})
	}
})
router.get('/email/:random',(req,res,next)=>{
	User.findOne({random: req.params.random})
	.then(user=>{
		user.verified=true;
		user.random=undefined;
		return user.save();
	})
	.then(user=>{
		if(req.query.json)
			res.status(200).json({message:'verified'});
		else
			res.send(`<h3>Email verified</h3>
			<a href='/'>Home</a>`)
	})
	.catch(err=>{
		next(err);
	})
})
router.get('/sendMail/:id',(req,res)=>{
	let _user='';
	User.findOne({_id: req.params.id})
	.then(user=>{
		if(!user)
			throw Error("no user with that id");
		_user=user;
		return sendMail(user.email,user.random) 
	})
	.then((info)=>{
		console.log(info.response);
		const response=(info.response).toString();
		const substring=response.substr(4,14);
		if(substring==='Message queued')
			res.status(200).json({securityKey: _user.random});
		else
			res.status(200).json({message:"email sent"});
	})
	.catch(err=>{
		console.log(err);
		if(_user!=='')
			res.status(200).json({securityKey: _user.random});
		else
			res.status(500).send(err.message);
	})
})
function authenticate(req,user,fn){
	// console.log(req.body.password,typeof(req.body.password));
	hash({password: req.body.password, salt: user.salt},(err, pass, salt, hash)=>{
		if(err)
			return fn(err);
		// console.log(user.hash);
		// console.log(hash);
		if(hash==user.hash)
			return fn(null,user);
		else
			fn(new Error('invalid password'));

	});
}
module.exports=router;