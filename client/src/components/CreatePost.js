import React,{Component} from 'react';
import { postDataAxios } from '../fetch';

class CreatePost extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            myFile:''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onChangeFile=this.onChangeFile.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const fd=new FormData();
        fd.append('text',this.state.text);
        fd.append('myFile',this.state.myFile,this.state.myFile.name);
        postDataAxios('/post/',fd)
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
    onChangeFile(e){
        this.setState({
            myFile:e.target.files[0]
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
                        <input type="file" name="myFile" onChange={this.onChangeFile}/>
                        <button type="submit" className="btn btn-info btn-block">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreatePost;