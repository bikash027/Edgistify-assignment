import React,{Component} from 'react';
import { postDataAxios } from '../fetch';
import { Link } from 'react-router-dom';

class AddComment extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            form: false,
            error:''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onClick=this.onClick.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        postDataAxios(`/post/comments/${this.props.post._id}`,this.state)
        .then(data=>{
            console.log(data);
            this.props.getComments();
            this.setState({form: false});
        })
        .catch(err=>{
            console.log({err});
            this.setState({error: err.response.data});
        })
    }
    onChange(e){
        this.setState({
            text: e.target.value
        })
    }
    onClick(){
        this.setState({form: true});
    }
    render(){
        const commentOrReply=(this.props.post.contentType==='comment')?'reply': 'comment';
        let content=<Link onClick={this.onClick} className="card-link text-dark">Add {commentOrReply}</Link>;
        if(this.state.form)
            content=<form onSubmit={this.onSubmit} className="form-group">
                        <span className="text-danger">{this.state.error}</span>
                        <div className="form-group">
                            <textarea 
                                className="form-control"
                                name='text'
                                rows="3"
                                placeholder='write something here'
                                value={this.state.text}
                                onChange={this.onChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-info btn-block">Submit</button>
                    </form>
        return(
            <div className="col-6">
                {content}
            </div>
        )
    }
}
export default AddComment;