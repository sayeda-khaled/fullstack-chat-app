import { Component } from 'react';
import Cookies from 'js-cookie';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: '',
    email: '',
    password1: '',
    password2: '',

  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleRegistration(this.state)
}


  render() {
    return (
      <form onSubmit={this.handleRegistration}>
        <input type="text" name="username" onChange={this.handleInput} value={this.state.username} required />
        <input type="email" name="email" pattern=".+@globex\.com" size="30" required onChange ={this.handleInput} value={this.state.email}/>
        <input type="password" name="password1" required onChange={this.handleInput} value={this.state.password1}/>
        <input type="password" name="password2" required onChange={this.handleInput} value={this.state.password2}/>
        <button type="submit">Register</button>
      </form>
    );
  }
}
export default Registration;
