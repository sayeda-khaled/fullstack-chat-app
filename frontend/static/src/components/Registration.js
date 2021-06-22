import { Component } from 'react';
import Cookies from 'js-cookie';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
    Username: '',
    Email: '',
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
        <input type="text" name="Username" onChange={this.handleInput} value={this.state.Username}/>
        <input type="email" name="Email" onChange ={this.handleInput} value={this.state.Email}/>
        <input type="password1" name="password1" onChange={this.handleInput} value={this.state.password1}/>
        <input type="password2" name="password2" onChange={this.handleInput} value={this.state.password2}/>
        <button type="submit">Register</button>
      </form>
    );
  }
}
export default Registration;
