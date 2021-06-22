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
        <input type="text" name="username" onChange={this.handleInput} value={this.state.username}/>
        <input type="email" name="email" onChange ={this.handleInput} value={this.state.email}/>
        <input type="password" name="password" onChange={this.handleInput} value={this.state.password1}/>
        <button type="submit">Login</button>
      </form>
    );
  }
}
export default Login;
