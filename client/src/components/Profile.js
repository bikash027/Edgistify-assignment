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
        getDataAxios(`/user/profile/${params.userId}`)
        .then(data=>{
            // console.log(data);
            this.setState(data);
        })
        .catch(err=>{
            console.log(err.response.data);
        })
    }
    uploadDone(){
        this.props.history.push('/');
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
                        <h2 className='color'>{profile.userName}</h2>
                        <h3 className='color'>{profile.fullName}</h3>
                        <h6 className='color'>{profile.countPost} posts</h6>
                    </div>
                </div>
                <h3 className='color'>
                    {(profile.countPost)?`Posts by ${profile.userName}:`:''}
                </h3>
                <Feed profile={profile}/>
            </div>
        )
    }
}

export default Profile;