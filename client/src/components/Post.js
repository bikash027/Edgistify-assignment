import React,{Component} from 'react';
import Comments from './Comments';
import {getData, postData} from '../fetch';
class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            commentsListed:false,
            comments: [],
            addForm: false,
            newComment: ''
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
        getData(`/post/comments/${this.props.post._id}`)
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
    onClickAdd(){
        postData(`/post/comments/${this.props.post._id}`,{text:this.state.newComment})
        .then(data=>{
            console.log(data);
            this.getComments();
        })
        .catch(err=>{
            console.log(err);
        })
    }
    onChange(e){
        this.setState({
            newComment: e.target.value
        })
    }
    render(){
        const post=this.props.post;
        return(
            <div className="custom card">
                <div className="card-body">
                    <h5 className="card-title">{post.userName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{post.time_added}</h6>
                    <p className="card-text">{post.text}</p>
                    <a href="#" onClick={this.onClickComments.bind(this)} className="card-link">Comments</a>
                    {/* <a href="#" onClick={this.onClickAdd.bind(this)} className="card-link">Another link</a> */}

                    <input type='text' name='comment' placeholder='Add comment' className="form-control"
                           value={this.state.newComment} onChange={this.onChange.bind(this)} />
                    <button className="btn btn-outline-primary btn-sm" onClick={this.onClickAdd.bind(this)}>Add</button>
                    {(this.state.comments.length!==0)?<h6>Comments</h6>:''}
                    <Comments comments={this.state.comments} />
                </div>
            </div>
        );
    }
}

export default Post;