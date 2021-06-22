import { Component } from 'react';
import Cookies from 'js-cookie';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    Username: '',
    Email: '',
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
      <form onSubmit={this.handleRegistration}>
        <input type="text" name="Username" onChange={this.handleInput} value={this.state.Username}/>
        <input type="email" name="Email" onChange ={this.handleInput} value={this.state.Email}/>
        <input type="password1" name="password1" onChange={this.handleInput} value={this.state.password1}/>
        <button type="submit">Login</button>
      </form>
    );
  }
}
export default Login;
