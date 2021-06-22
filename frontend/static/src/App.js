import React from 'react';
import ChatList from './components/ChatList.js';
import Registration from './components/Registration.js';
import Login from './components/Login.js';
import Cookies from 'js-cookie';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // messages: [],
      // text: '',
      selection: !!Cookies.get('Authorization') ? 'chats' : 'login'
    }
    // this.addMessage = this.addMessage.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }


    async handleLogin(user) {
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


      if(response.ok) {
        const data = await response.json().catch(handleError);
        Cookies.set('Authorization', `Token ${data.key}`);
        this.setState({ selection: 'chats' });
    }
      }
      // console.log(data);


    async handleRegistration(user) {
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


      if(response.ok) {
        const data = await response.json().catch(handleError);
        Cookies.set('Authorization', `Token ${data.key}`);
        this.setState({ selection: 'chats' });

      }
      // console.log(data);
    }

    async handleLogout(){
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
      };
        const handleError = (err) => console.warn(err);
        const response = await fetch('/rest-auth/logout/', options).catch(handleError);

        if(response.ok) {
          Cookies.remove('Authorization');
          this.setState({ selection: 'login' });

        }
      }



  render() {


    return(
      <>
        <ChatList />
        <Registration handleRegistration={this.handleRegistration}/>
        <Login handleLogin={this.handleLogin}/>

      </>
    )
  }
}

export default App;
