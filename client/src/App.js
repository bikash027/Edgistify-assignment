import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {getData} from './fetch';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoggedIn: false
    }
    this.changeLinks=this.changeLinks.bind(this);
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
  changeLinks(isLoggedIn){
    this.setState({isLoggedIn});
  }
  render(){
    return (
      <BrowserRouter>
        <div>
          <Nav isLoggedIn={this.state.isLoggedIn} changeLinks={this.changeLinks}/>
          <div className="container">
              <main role="main" className="pb-3">
                  <Route path='/login' exact
                   render={(props)=><Login {...props} changeLinks={this.changeLinks}/>}/>
                  <Route path='/register' exact
                   render={(props)=><Register {...props} changeLinks={this.changeLinks}/>}/>
                   <Route path='/create' exact component={CreatePost}/>
                   <Route path='/' exact component={Feed}/>
              </main>
          </div>          
          <Route path="/" component={Footer}/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
