import React,{Component} from 'react';
import { postDataAxios } from '../fetch';

class ProfilePic extends Component{
    constructor(props){
        super(props);
        this.state={
            profile: ''
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
        const fd=new FormData();
        fd.append('profile',this.state.profile,this.state.profile.name);
        postDataAxios(`/user/image/${this.props.profile._id}`,fd)
        .then(data=>{
            console.log(data);
            this.props.uploadDone();
        })
    }
    onChange(e){
        this.setState({profile: e.target.files[0]})
    }
    render(){
        const style={
            backgroundColor: 'gray',
            minHeight: '200px',
            padding: '20px',
            marginBottom: '20px'
        }
        const profile=this.props.profile;
        let content='';
        if(profile.image)
            content=<img style={{width:'100%'}} src={`/uploads/${profile.image}`} alt="profile pic"/>
        else if(profile.owner)
            content=<form onSubmit={this.onSubmit} className="form-group">
                        <div className="form-group">
                            <label htmlFor="profile" className="control-label">profile pic</label>
                            <input type="file" name="profile" onChange={this.onChange} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-info btn-block">Submit</button>
                    </form>
        return(
            <div style={style}>
                {content}
            </div>
        )
    }
}

export default ProfilePic;