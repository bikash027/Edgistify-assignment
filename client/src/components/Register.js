import React,{Component} from 'react';
import {postData} from '../fetch';
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      userName:'',
      fullName:'',
      error:''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    postData('/user/register', this.state)
    .then((data) => {
      console.log(data); // JSON data parsed by `response.json()` call
      this.props.changeLinks(true);
      this.props.history.push('/');
    });
  }

  render(){
    // const options = [
    //   {label:'Male',value:'Male'},
    //   {label:'Female',value:'Female'},
    //   {label:'Others',value:'Others'},
    // ];
    // const options2 = [
    //   {label:'General',value:'General'},
    //   {label:'OBC',value:'OBC'},
    //   {label:'SC',value:'SC'},
    //   {label:'ST',value:'ST'},

    // ];
    const {error} = this.state;
    return(
        <div>
          <h1>Register</h1>
          <hr/>
          <div className="row">
            <div className="col-md-4">
              <form onSubmit={this.onSubmit} className="form-group">
                <div className="form-group">
                  <label htmlFor="email" className="control-label"></label>
                  <input name="email" type="text" placeholder="email" onChange={this.onChange} value={this.state.email} className="form-control" />
                  <span className="text-danger">{error.email}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="control-label"></label>
                  <input name="password" type="password" placeholder="password" onChange={this.onChange} value={this.state.password} className="form-control" />
                  <span className="text-danger">{error.password}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="userName" className="control-label"></label>
                  <input name="userName" type="text" placeholder="username" onChange={this.onChange} value={this.state.userName} className="form-control" />
                  <span className="text-danger">{error.userName}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="fullName" className="control-label"></label>
                  <input name="fullName" type="text" placeholder="full name" onChange={this.onChange} value={this.state.fullName} className="form-control" />
                  <span className="text-danger">{error.fullName}</span>
                </div>
                {/* <InputFieldTextGroup name="Topic" placeholder="enter topic" value={this.state.Topic}  error={error.Topic} />
                <InputFieldTextGroup name="publisherName" placeholder="enter publisher name" value={this.state.publisherName} onChange={this.onChange} error={error.publisherName} />
                <InputFieldTextGroup type="date" name="date" placeholder="enter starting date" value={this.state.date} onChange={this.onChange} error={error.date} /> */}
                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
export default Register;