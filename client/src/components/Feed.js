import React,{Component} from 'react';
import {getData} from '../fetch';
import Post from './Post';
import CreatePost from './CreatePost';
class Feed extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        getData('/post/')
        .then((data)=>{
            console.log(data)
            this.setState({posts:data.posts});
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    onClick(){
        this.props.history.push('/create');
    }
    render(){
        const content=this.state.posts.map(post=> <Post post={post}/> );
        return(
            <div>
                <button onClick={this.onClick.bind(this)} className="btn btn-info btn-block">Create post</button>
                {content}
            </div>
        );
    }
}
export default Feed;