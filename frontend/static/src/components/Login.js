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
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  async handleLogin(e) {
    e.preventDefault();
    const user = {
      Username: this.state.Username,
      Email: this.state.Email,
      password: this.state.password,

    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    };
    const handleError = (error) => console.warn(error);
    const response = await fetch('/rest-auth/login/', options).catch(handleError);
    const data = await response.json().catch(handleError);

    if(data.key) {
      Cookies.set('Authorization', `Token ${data.key}`);
    }
    // console.log(data);
  }
  render() {
    return (
      <form onSubmit={this.handleRegistration}>
        <input type="text" name="Username" onChange={this.handleInput} value={this.state.Username}/>
        <input type="email" name="Email" onChange ={this.handleInput} value={this.state.Email}/>
        <input type="password1" name="password1" onChange={this.handleInput} value={this.state.password1}/>
        <button type="submit">Register</button>
      </form>
    );
  }
}
export default Login;
