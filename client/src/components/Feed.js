import React,{Component} from 'react';
import { getDataAxios} from '../fetch';
import Post from './Post';
import {Link} from 'react-router-dom';
class Feed extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        let url='/post/';
        if(this.props.profile)
            url+='?userId='+this.props.profile._id
        getDataAxios(url)
        .then((data)=>{
            // console.log(data)
            this.setState({posts:data.posts});
        })
        .catch((err)=>{
            console.log(err);
            if(err.response.data==='not logged in')
                if(!this.props.profile)
                    this.props.history.push('/login');
        })
    }
    // onClick(){
    //     this.props.history.push('/create');
    // }
    render(){
        // onClick={this.onClick.bind(this)}
        const content=this.state.posts.map(post=> <Post key={post._id} post={post}/> );
        let createLink=<Link to="/create" className="btn btn-info btn-block">Create post</Link>
        if(this.props.profile){
            if(!(this.props.profile.owner))
                createLink=''
        }
        return(
            <div>
                {createLink}
                <hr/>
                {content}
            </div>
        );
    }
}
export default Feed;