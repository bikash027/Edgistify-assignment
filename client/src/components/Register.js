import React,{Component} from 'react';
import { postDataAxios} from '../fetch';
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
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onChangeFile(e){
    // this.setState({
    //   profile: e.target.files[0]
    // })
  }
  onSubmit(e){
    e.preventDefault();
    const fd=new FormData();
    fd.append('email',this.state.email);
    fd.append('password',this.state.password);
    fd.append('userName',this.state.userName);
    fd.append('fullName',this.state.fullName);
    // fd.append('profile',this.state.profile,this.state.profile.name);
    postDataAxios('/user/register', this.state)
    .then((data) => {
      console.log(data); 
      this.props.changeLinks(true);
      this.props.history.push('/verify');
    })
    .catch(err=>{
      this.setState({error: err.response.data});
    });
  }

  render(){
    const {error} = this.state;
    return(
        <div>
          <h1>Register</h1>
          <hr/>
          <div className="row">
            <div className="col-md-4">
              <span className="text-danger">{error}</span>
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
                {/* <input type='file' name="profile" onChange={this.onChangeFile}/> */}
                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
export default Register;