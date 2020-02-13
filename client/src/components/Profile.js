import React,{Component} from 'react';
import { getDataAxios } from '../fetch';
import Feed from './Feed';
import ProfilePic from './ProfilePic';
class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            profile:''
        }
        this.uploadDone=this.uploadDone.bind(this);
    }
    componentDidMount(){
        const { match: { params } } = this.props;
        getDataAxios(`/user/profile/${params.userid}`)
        .then(data=>{
            // console.log(data);
            this.setState(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    uploadDone(){
        const { match: { params } } = this.props;
        this.props.history.replace(`/profile/${params.userid}`);
    }
    render(){
        if(this.state.profile==='')
            return '';
        const profile=this.state.profile;
        return(
            <div>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4'><ProfilePic profile={profile} uploadDone={this.uploadDone}/></div>
                    <div className='col-sm-12 col-md-8 col-lg-8'>
                        <h2>{profile.userName}</h2>
                        <h3>{profile.fullName}</h3>
                        <h6>{profile.countPost} posts</h6>
                    </div>
                </div>
                <Feed profile={profile}/>
            </div>
        )
    }
}

export default Profile;