import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class VerifyMessage extends Component{
    render(){
        return(
            <div className='color'>
                <p>A verification link has been sent to the email-address you provided.
                   Click on that link to get your email verified.</p>
                <p>You can't post or comment or reply unless your email is verified.
                   You can browse the <Link to='/'>feed</Link> though</p>
            </div>
        )
    }
}

export default VerifyMessage;