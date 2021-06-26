import { Component } from 'react';
import Cookies from 'js-cookie';

import MessageDetail from './MessageDetail.js';

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],

    }
    this.addMessage = this.addMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.fetchMessages = this.fetchMessages.bind(this);
  }

  componentDidMount() {
    this.displayMessages = setInterval(this.fetchMessages,
    1000
      );
    }

  componentWillUnmount() {
     clearInterval(this.displayMessages);
  }

  fetchMessages(){
    fetch('/api/v1/chats/')
    .then(response => response.json())
    .then(data => this.setState({ messages: data }));
    }

  handleInput(event) {
      this.setState({[event.target.name]: event.target.value});
    }

  deleteMessage(id) {
    const options= {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }
    fetch(`/api/v1/chats/${id}/`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const messages = [...this.state.messages];
        const index = messages.findIndex(message => message.id === id);
        messages.splice(index, 1);
        this.setState({ messages });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  editMessage(id, text) {

    const message = {
      text,
    };

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(message),
    }
    fetch(`/api/v1/chats/${id}/`, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const messages = [...this.state.messages];
          const index = messages.findIndex(message => message.id === id);
          messages[index].text = text;
          this.setState({ messages });
        });
    }

  addMessage(event) {

    event.preventDefault();
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
      .then(data => {
        const messages = [...this.state.messages];
        messages.push(data);
        this.setState({messages});
        this.setState({ text: '' });
      });
    }

          // <button className="btn" onClick={() => this.props.handleLogout()}>Logout</button>

  render() {

      const messages = this.state.messages.map(message => (
        <MessageDetail key={message.id} message={message} deleteMessage={this.deleteMessage} editMessage={this.editMessage}/>
      ));

      return(
        <>
          <button type="submit" class="btn btn-primary offset" onClick={() => this.props.handleLogout()}>Logout</button>
          <ul>{messages}</ul>
          <section className="submit">
            <form onSubmit={this.addMessage}>
              <input  autoComplete="off" className="text" type="text" name="text" value={this.state.text} onChange={this.handleInput}/>
              <button className="sendButton" type="submit">Send Message</button>
            </form>
          </section>
        </>
      )
    }
  }

export default ChatList;
