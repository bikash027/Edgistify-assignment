import React,{Component} from 'react';
import { postDataAxios } from '../fetch';

class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            myFile:'',
            error: ''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onChangeFile=this.onChangeFile.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const fd=new FormData();
        fd.append('text',this.state.text);
        if(this.state.myFile!=='')
            fd.append('myFile',this.state.myFile,this.state.myFile.name);
        postDataAxios('/post/',fd)
        .then(data=>{
            console.log(data);
            this.props.history.push('/');
        })
        .catch(err=>{
            this.setState({error: err.response.data});
        })
    }
    onChange(e){
        this.setState({
            text: e.target.value
        })
    }
    onChangeFile(e){
        this.setState({
            myFile:e.target.files[0]
        })
    }
    render(){
        return(
            <div>
                <h1 className='color'>Create post</h1>
                <hr/>
                <div className="row">
                    <div className="col-md-4">
                    <form onSubmit={this.onSubmit} className="form-group">
                        <span className="text-danger">{this.state.error}</span>
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
                        <label htmlFor="profile" className="color control-label">Add an image:</label>
                        <input type="file" name="myFile" className='color' onChange={this.onChangeFile}/>
                        <button type="submit" className="btn btn-info btn-block">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreatePost;