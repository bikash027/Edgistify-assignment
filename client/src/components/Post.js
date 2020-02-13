import React,{Component} from 'react';
import Comments from './Comments';
import { getDataAxios} from '../fetch';
import AddComment from './AddComment';
import {Link} from 'react-router-dom';
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
        const commentsLink=(commentsOrReplies!=='')?
            <span onClick={this.onClickComments.bind(this)} className="card-link">{commentsOrReplies}({this.state.commentCount})</span>:
            '';
        const addComment=(commentsOrReplies!=='')?
            <AddComment getComments={this.getComments} post={post}/>:
            '';
        const date=new Date(post.time_added);

        
        return(
            <div className="custom card">
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/profile/${post.userId}`} >{post.userName}</Link></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</h6>
                    <hr/>
                    <p className="card-text">{post.text}</p>
                    <hr/>
                    <div className="row">
                        <div className="col-6">
                            {commentsLink}
                        </div>
                        {addComment}
                    </div>
                    <hr/>
                    {(this.state.comments.length!==0)?<h6 className="text-muted">{commentsOrReplies}</h6>:''}
                    <Comments comments={this.state.comments} />
                </div>
            </div>
        );
    }
}

export default Post;