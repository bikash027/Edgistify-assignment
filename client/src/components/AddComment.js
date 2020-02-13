import React,{Component} from 'react';
import { postDataAxios } from '../fetch';

class AddComment extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            form: false
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
            console.log(err);
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
        const content=(this.state.form)?
                        <form onSubmit={this.onSubmit} className="form-group">
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
                        </form>:
                        <span onClick={this.onClick} className="card-link">Add {commentOrReply}</span>
        return(
            <div className="col-6">
                {content}
            </div>
        )
    }
}
export default AddComment;