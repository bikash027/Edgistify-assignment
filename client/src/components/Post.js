import React,{Component} from 'react';
import Comments from './Comments';
import { getDataAxios} from '../fetch';
import AddComment from './AddComment';
import User from './User';
import { Link } from 'react-router-dom';
class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            commentsListed:false,
            comments: [],
            commentCount: '',
            addForm: false,
            newComment: ''
        }
        this.getComments=this.getComments.bind(this);
    }
    componentDidMount(){
        if(this.props.post.contentType==='comment' || this.props.post.contentType==='post'){
            getDataAxios(`/post/count/${this.props.post._id}`)
            .then(data=>{
                this.setState({commentCount: data.count});
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    onClickComments(){
        if(this.state.commentsListed)
            this.setState({
                commentsListed: false,
                comments:[]
            })
        else{
            this.getComments();   
        }
    }
    getComments(){
        getDataAxios(`/post/comments/${this.props.post._id}`)
        .then(data=>{
            this.setState({
                commentsListed: true,
                comments:data.comments
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        const post=this.props.post;
        let commentsOrReplies='';
        if(post.contentType==='comment')
            commentsOrReplies='Replies';
        else if(post.contentType==='post')
            commentsOrReplies='Comments';

        const showHide=(this.state.commentsListed)?'Hide': 'Show';

        const commentsLink=(commentsOrReplies!=='')?
            <Link><small onClick={this.onClickComments.bind(this)} className="card-link text-dark">{showHide} {commentsOrReplies}({this.state.commentCount})</small></Link>:
            '';

        const addComment=(commentsOrReplies!=='')?
            <AddComment getComments={this.getComments} post={post}/>:
            '';

        const image=(post.image)?
            <img className="card-img" src={`/uploads/${post.image}`} />
            : '';

        const commentList=(this.state.comments.length!==0)?
                            <div className="card-body">
                                <h6 className="text-muted">{commentsOrReplies}</h6>
                                <Comments comments={this.state.comments} />
                            </div>:'';

        const date=new Date(post.time_added);

        return(
            <div className="custom card">
                <div className="card-body">
                    <User user={post.User}/>
                    <small className="card-subtitle mb-2 text-muted">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</small>
                    <hr/>
                    {image}
                    <p className="card-text">{post.text}</p>
                    <hr/>
                    <div className="row">
                        <div className="col-6">
                            {commentsLink}
                        </div>
                        {addComment}
                    </div>
                    <hr/>
                </div>
                {commentList}
            </div>
        );
    }
}

export default Post;