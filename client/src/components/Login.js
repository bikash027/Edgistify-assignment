import React,{Component} from 'react'
import { postDataAxios} from '../fetch';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
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
    postDataAxios('/user/login', this.state)
    .then((data) => {
      console.log(data); 
      this.props.changeLinks(true);
      this.props.history.push('/');
    })
    .catch(err=>{
      this.setState({error: err.response.data});
    });
  }

  render(){
    const {error} = this.state;
    return(
        <div>
          <h1 className='color'>Login</h1>
          <hr/>
          <div className="row">
            <div className="col-md-4">
              <span className="text-danger">{error}</span>
              <form onSubmit={this.onSubmit} className="form-group">
                <div className="form-group">
                  <label htmlFor="email" className="control-label"></label>
                  <input name="email" type="text" placeholder="email" onChange={this.onChange}  className="form-control" />
                  <span className="text-danger">{error.email}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="control-label"></label>
                  <input name="password" type="password" placeholder="password" onChange={this.onChange} value={this.state.password} className="form-control" />
                  <span className="text-danger">{error.password}</span>
                </div>
                <button type="submit" className="btn btn-info btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
export default Login;