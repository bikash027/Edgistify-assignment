import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class User extends Component{
    render(){
        const style={
            display: 'inline-block',
            width: '75px',
            backgroundColor: 'gray',
            margin: '5px',
            minHeight: '20px'
        }
        let image='';
        if(this.props.user.image){
            image=<img src={`/uploads/minified-${this.props.user.image}`} />
        }
        return(
            <table><tbody>
            <tr>
                <td><div style={style}>
                    {image}
                </div></td>
                <td><h5 className="card-title"><Link to={`/profile/${this.props.user._id}`} >{this.props.user.userName}</Link></h5></td>
            </tr>
            </tbody></table>
        )
    }
}

export default User;