const express=require('express');
const router=express.Router();
const Post=require('../models/Post');
const User=require('../models/User');
const multer = require("multer");
const path=require('path');

const storage=multer.diskStorage({
	destination: (process.env.NODE_ENV==='development')?'client/public/uploads':'client/build/uploads',
	filename: function(req,file,cb){
		cb(null,file.fieldname + '_' + Date.now() + path.extname(file.originalname));
	}
});

//2
const upload = multer({
	storage: storage
 }).single('myFile');

function emailVerified(req,res,next){
    User.findOne({_id: req.session.userId})
    .then(user=>{
        if(user.verified)
            next();
        else
            res.status(500).send("access denied");
    })
}

router.use((req,res,next)=>{
    if(req.session.userId)
        next();
    else
        res.status(500).send("not logged in");
});

router.get('/',(req,res)=>{
    const filter={contentType: 'post'};
    if(req.query.userId)
        filter.User=req.query.userId;
    Post.find(filter,null,
        {
            sort:{
                time_added: -1 //Sort by Date Added DESC
            }
        }
    )
    .populate('User')
    .exec()
    .then((posts)=>{
        const _posts=posts.map(post=>{
            // console.log(post);
            const _post={
                _id: post._id,
                text:post.text,
                time_added:post.time_added,
                contentType:post.contentType,
                image:post.image,
                User:{
                    userName: post.User.userName,
                    _id: post.User._id,
                    image: post.User.image
                }
            };
            // console.log(_post);
            return _post;
        })
        console.log(_posts);
        res.status(200).json({posts:_posts});
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send("could not retrieve posts from db");
    })
})

router.post('/',emailVerified,(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.status(500).send("image problem");
        }
        else{
            console.log(req.body);
            Post.create({
                User: req.session.userId,
                text: req.body.text,
                time_added: Date.now(),
                image: (req.file)?req.file.filename:undefined,
                contentType: 'post'
            })
            .then((post)=>{
                res.status(200).json({message: "post created successfully"});
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).send("could not save post to db");
            })
        }
    })
});

router.get('/comments/:id',(req,res)=>{
    Post.find({contentType:{$in:['comment','reply']}, Post: req.params.id},null,
        {
            sort:{
                time_added: -1
            }
        }
    )
    .populate('User')
    .exec()
    .then((comments)=>{
        comments=comments.map(comment=>{
            return {
                _id: comment._id,
                text: comment.text,
                time_added: comment.time_added,
                contentType: comment.contentType,
                User:{
                    userName: comment.User.userName,
                    _id: comment.User._id,
                    image: comment.User.image
                }
            }
        })
        res.status(200).json({comments});
    })
    .catch((err)=>{
        res.status(500).send('could not fetch comments');
    })
})

router.post('/comments/:id',emailVerified,(req,res)=>{
    Post.findOne({_id: req.params.id})
    .then(post=>{
        let content='';
        if(post.contentType==='comment')
            content='reply';
        else if(post.contentType==='post')
            content='comment';
        else
            throw new Error("cannot reply to a reply");
        return Post.create({
            contentType: content,
            text: req.body.text,
            User: req.session.userId,
            Post: post._id,
            time_added: Date.now()
        })
    })
    .then((comment)=>{
        res.status(200).json({message:"comment added successfully"});
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send(err.message);
    });
});

router.get('/count/:id',(req,res)=>{
    Post.countDocuments({Post: req.params.id})
    .then(count=>{
        res.status(200).json({count});
    })
    .catch(err=>{
        res.status(500).send(err.message);
    })
})

module.exports=router;