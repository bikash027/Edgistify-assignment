import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {postDataAxios} from '../fetch';
class Nav extends Component{
    onClick(navObject){
        console.log(navObject.props);
        postDataAxios('/user/logout')
        .then((data)=>{
            console.log("logged out");
            navObject.props.changeLinks(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render(){
        let content='';
        if(this.props.isLoggedIn){
            content=
            <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                    <span className="nav-link text-dark" onClick={()=>this.onClick(this)}>Logout</span>
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
            <header >
                <nav  className="custom-nav navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Logistics Social</Link>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="navbar  d-sm-inline-flex flex-sm-row-reverse">
                            {content}
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
export default Nav;