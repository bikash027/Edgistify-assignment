const express=require('express');
const router=express.Router();
const Post=require('../models/Post');

router.use((req,res,next)=>{
    if(req.session.userId)
        next();
    else
        res.status(500).json({error:"not logged in"});
});

router.get('/',(req,res)=>{
    Post.find({isComment: false},null,
        {
            skip:0, // Starting Row
            limit:10, // Ending Row
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
                text: post.text,
                userName: post.User.userName,
                userId: post.User._id,
                time_added: post.time_added
            };
            // console.log(_post);
            return _post;
        })
        console.log(_posts);
        res.status(200).json({posts:_posts});
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({error: "could not retrieve posts from db"});
    })
})

router.post('/',(req,res)=>{
    Post.create({
        User: req.session.userId,
        text: req.body.text,
        time_added: Date.now(),
        isComment: false
    })
    .then((post)=>{
        res.status(200).json({message: "post created successfully"});
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({error: "could not save post to db"});
    })
});

router.get('/comments/:id',(req,res)=>{
    Post.find({isComment: true, Post: req.params.id},null,
        {
            skip:0,
            limit:10,
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
                userName: comment.User.userName,
                userId: comment.User._id,
                time_added: comment.time_added
            }
        })
        res.status(200).json({comments});
    })
    .catch((err)=>{
        res.status(500).json({error: "could not fetch comments"});
    })
})

router.post('/comments/:id',(req,res)=>{
    Post.create({
        isComment: true,
        text: req.body.text,
        User: req.session.userId,
        Post: req.params.id,
        time_added: Date.now()
    })
    .then((comment)=>{
        res.status(200).json({message:"comment added successfully"});
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({error: "could not save comment in db"});
    });
});

module.exports=router;