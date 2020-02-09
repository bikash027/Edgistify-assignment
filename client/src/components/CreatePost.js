import React,{Component} from 'react';
import { postData } from '../fetch';

class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        postData('/post/',this.state)
        .then(data=>{
            console.log(data);
            this.props.history.push('/');
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
    render(){
        return(
            <div>
                <h1>Create post</h1>
                <hr/>
                <div className="row">
                    <div className="col-md-4">
                    <form onSubmit={this.onSubmit} className="form-group">
                        <div class="form-group">
                            {/* <label for="Textarea1">Example textarea</label> */}
                            <textarea 
                                class="form-control"
                                name='text'
                                rows="3"
                                placeholder='write something here'
                                value={this.state.text}
                                onChange={this.onChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-info btn-block">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreatePost;