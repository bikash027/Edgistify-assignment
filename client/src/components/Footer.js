import React,{Component} from 'react';
import Links from './Links';
import {Link} from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <footer className="border-top footer text-muted">
                <div className="container">
                    &copy; 2020 - Logistics management social - <a href="#">Privacy</a>
                </div>
            </footer>
        );
    }
}
export default Footer;