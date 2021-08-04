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
      selection: !!Cookies.get('Authorization') ? 'chats' : 'login'
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(`/rest-auth/user/`);
    const json = await response.json();
    console.log('user', json);
  }


    async handleLogin(user) {
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
      const response = await fetch('/rest-auth/login/', options).catch(handleError);

      if(response.ok) {
        const data = await response.json().catch(handleError);
        Cookies.set('Authorization', `Token ${data.key}`);
        this.setState({ selection: 'chats' });
      }
    }

    async handleRegistration(user) {

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

    async handleSelection(selection) {
      this.setState({selection});
    }

  render() {
    return(
      <>
        <section className="main">
        {this.state.selection === 'chats' && <ChatList handleLogout={this.handleLogout}/>}
        {this.state.selection === 'registration' && <Registration handleRegistration={this.handleRegistration} handleSelection={this.handleSelection}/>}
        {this.state.selection === 'login' && <Login handleLogin={this.handleLogin} handleSelection={this.handleSelection}/> }
        </section>
      </>
    )
  }
}


export default App;
