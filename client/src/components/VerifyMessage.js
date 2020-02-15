import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { getDataAxios } from '../fetch';
class VerifyMessage extends Component{
    constructor(props){
        super(props);
        this.state={
            sent: 'sending',
            securityKey: '',
            error:''
        }
        this.onClick=this.onClick.bind(this);
    }
    componentDidMount(){
        const { match: { params } } = this.props;
        getDataAxios(`/user/sendMail/${params.userId}`)
        .then(data=>{
            if(data.message)
                this.setState({sent:'sent'});
            else{
                console.log(data);
                this.setState({
                    sent: 'not sent',
                    securityKey: data.securityKey
                })
            }
        })
        .catch(err=>{
            this.setState({error: err.response.message});
        })
    }
    onClick(){
        getDataAxios(`/user/email/${this.state.securityKey}?json=1`)
        .then(data=>{
            console.log(data);
            this.props.history.push('/');
        })
        .catch(err=>{
            this.setState({error: err.response.data});
        })
    }
    render(){
        let message='';
        if(this.state.sent==='sending'){
            message=<p>Sending Email</p>;
        }
        else if(this.state.sent==='sent'){
            message=<div>
                        <p>A verification link has been sent to the email-address you provided.
                        Click on that link to get your email verified.</p>
                        <p>You can't post or comment or reply unless your email is verified.
                        You can browse the <Link to='/'>feed</Link> though</p>
                    </div>
        }
        else if(this.state.sent==='not sent'){
            message=<p>Link for verification of email could not be sent. For the sake of the
            assignment please <Link onClick={this.onClick}>click here</Link> to flag your email as verified.</p>;
        }
        const content=(this.state.error!=='')?<p>{this.state.error}</p>: message;
        return(
            <div className='color'>
                {content}                
            </div>
        )
    }
}

export default VerifyMessage;