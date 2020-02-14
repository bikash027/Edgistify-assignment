import React,{Component} from 'react';
import Post from './Post';
class Comments extends Component{
    render(){
        const content=this.props.comments.map(comment => <Post key={comment._id} post={comment} />);
        return(content);
    }
}
export default Comments;