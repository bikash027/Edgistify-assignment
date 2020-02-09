import React,{Component} from 'react';
import {getData,postData} from '../fetch';
import {Link} from 'react-router-dom';
class Links extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        }
        this.onClick= this.onClick.bind(this);
    }
    componentDidMount(){
        getData('/user/isLoggedIn')
        .then((data)=>{
            this.setState(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    onClick(){
        postData('/user/logout')
        .then((data)=>{
            console.log("logged out");
            this.setState({isLoggedIn: false});
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        let content='';
        if(this.state.isLoggedIn){
            content=
            <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                    <span className="nav-link text-dark" onClick={this.onClick}>Logout</span>
                </li>
            </ul>
        }
        else{
            content=
            <ul className="navbar-nav flex-grow-1">                    
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/login">Login</Link>
                </li>
            </ul>
        }
        return(
            <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                {content}
            </div>
        )
    }
}
export default Links;