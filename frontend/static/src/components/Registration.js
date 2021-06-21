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
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  async handleRegistration(e) {
    e.preventDefault();
    const user = {
      username: this.state.Username,
      email: this.state.Email,
      password1: this.state.password1,
      password2: this.state.password2,
    }
    console.log(user)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    };
    const handleError = (error) => console.warn(error);
    const response = await fetch('/rest-auth/registration/', options).catch(handleError);
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
        <input type="password2" name="password2" onChange={this.handleInput} value={this.state.password2}/>
        <button type="submit">Register</button>
      </form>
    );
  }
}
export default Registration;
