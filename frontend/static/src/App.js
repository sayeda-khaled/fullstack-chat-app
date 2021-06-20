import React from 'react';
import Cookies from 'js-cookie';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: '',
    }
    this.addMessage = this.addMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    fetch('/api/v1/chats/')
    .then(response => response.json())
    .then(data => this.setState({ messages: data }));
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  addMessage(event) {

    const message = {
      text: this.state.text,
    };
    const options = {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(message),
    }
    fetch('/api/v1/chats/', options)
      .then(response => response.json())
      .then(data => this.setState(data));
    }

  render() {
    const messages= this.state.messages.map(message => (
      <li key={message.id}>
        <p>{message.text}</p>
      </li>
    ))
    return(
      <>
        <section className="main">
        <form onSubmit={this.addMessage}>
          <input  className="text" type="text" name="text" value={this.state.text} onChange={this.handleInput}/>
          <button className="button" type="submit">Send Message</button>
        </form>
        </section>
        <ul>{messages}</ul>
      </>
    )
  }
}


export default App;
