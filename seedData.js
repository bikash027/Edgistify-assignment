const User= require('./models/User');
const Post=require('./models/Post');

function seedData(){
    return User.countDocuments({})
    .then(count=>{
        if(count===0){
            const arrUsers=[
                {
                    userName: "sandra",
                    fullName: "Sandra Bullocks",
                    email: "sandra@sandra.com",
                    image: "sandra.jpg",
                    salt: "60Q/rasj6cWwYy56/+qUwcQBW61SUODz4QxLfMHXLRPurSaA9e/l7KfnCG432B70/LBxLyohokOYkL6Ored+Yg==",
                    hash: "KRqE8QOPij0g2amYO0rDHGFZL230I7cITDdv0ATNT+xvdN+RDYBBekClh5JNunOQeskXl+NVisX7NTVy0rFz/nzt/0u28j6YOWXkWOjksYXmwOrh2KPQY8Ng0DlDw6Qp7+S3T8+3UrLaOuXedLpwOCw6pnbmS/Ce97mFsibX7tY=",
                    verified: true
                },
                {
                    userName: "Keanu",
                    fullName: "Keanu Reeves",
                    email: "keanu@keanu.com",
                    image: "keanu.jpg",
                    salt: "RN5qQgFQFlsWr7Wg3F09EMs5GghtG9J3QFUaCTj8/TwljJhC4kLE8tyeL/yiUR7L4Pfl1Ln09cNir7GMO5CVlg==",
                    hash: "pTdQ6PTVpuoa/xLHcxgmkHPmUpp7EOWZXfiRAU8xbumdAL+jgGKfaMajuRKmcnr0M+aIspBKRgpVjdBaD3qSAH0hjGwuFLGLLwFRpNk1ZYjObYm3q+ARgH+CJZiT8Rdj7AsAqRPbfzqTvTJtb0G1f3YkvCNSrjppRe6qIsxpboc=",
                    verified: true
                },
                {
                    userName: "ryan",
                    fullName: "Ryan Reynolds",
                    email: "ryan@ryan.com",
                    image: "Ryan.jpg",
                    salt: "RN5qQgFQFlsWr7Wg3F09EMs5GghtG9J3QFUaCTj8/TwljJhC4kLE8tyeL/yiUR7L4Pfl1Ln09cNir7GMO5CVlg==",
                    hash: "pTdQ6PTVpuoa/xLHcxgmkHPmUpp7EOWZXfiRAU8xbumdAL+jgGKfaMajuRKmcnr0M+aIspBKRgpVjdBaD3qSAH0hjGwuFLGLLwFRpNk1ZYjObYm3q+ARgH+CJZiT8Rdj7AsAqRPbfzqTvTJtb0G1f3YkvCNSrjppRe6qIsxpboc=",
                    verified: true
                },
                {
                    userName: "john",
                    fullName: "John Krasinski",
                    email: "john@john.com",
                    image: "john.jpg",
                    salt: "RN5qQgFQFlsWr7Wg3F09EMs5GghtG9J3QFUaCTj8/TwljJhC4kLE8tyeL/yiUR7L4Pfl1Ln09cNir7GMO5CVlg==",
                    hash: "pTdQ6PTVpuoa/xLHcxgmkHPmUpp7EOWZXfiRAU8xbumdAL+jgGKfaMajuRKmcnr0M+aIspBKRgpVjdBaD3qSAH0hjGwuFLGLLwFRpNk1ZYjObYm3q+ARgH+CJZiT8Rdj7AsAqRPbfzqTvTJtb0G1f3YkvCNSrjppRe6qIsxpboc=",
                    verified: true
                }
            ];
            return User.insertMany(arrUsers)
        }
        else{
            throw Error('data already present');
        }
    })
    .then(users=>{
        const arrPost=[
            {
                text: "I'm very good in Bird Box",
                User: users[0]._id,
                time_added: Date.now(),
                contentType: 'post'
            },
            {
                text: "Check out Constantine",
                User: users[1]._id,
                time_added: Date.now(),
                contentType: 'post'
            },
            {
                text: "You have to see the Deadpool movies. All of them.",
                User: users[2]._id,
                time_added: Date.now(),
                contentType: 'post'
            }
        ];
        return Post.insertMany(arrPost);
    })
}

module.exports=seedData;