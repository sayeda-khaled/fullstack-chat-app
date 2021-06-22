import { Component } from 'react';
// import Cookies from 'js-cookie';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: '',
    email: '',
    password: '',

  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleLogin(this.state)
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="formGroupExampleInput2">User Name</label>
          <input type="text" class="form-control" name="username" onChange={this.handleInput} value={this.state.username} id="formGroupExampleInput2" placeholder="User Name" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" name="email" onChange={this.handleInput} value={this.state.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" name="password" onChange={this.handleInput} value={this.state.password} id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
  );
  }
}



export default Login;
