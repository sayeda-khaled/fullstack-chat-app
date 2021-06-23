import { Component } from 'react';
import Cookies from 'js-cookie';

class ChatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: '',
    }
    this.addMessage = this.addMessage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.editMeaage = this.editMeaage.bind(this);
  }

  componentDidMount() {
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
      const messages = [...this.state.messages];
      const index = messages.findIndex(message => message.id === id);
      messages.splice(index, 1);
      this.setState({ messages });

      })
    .catch((error) => {
      console.error('Error:', error);
    });
  }


  editMeaage(id, text) {
    const message = {
      text: this.state.text,
    };

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(message),
    }
    fetch(`/api/v1/chats/${id}/`, options)
        .then(response => {
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
      });

    }

    render() {
      const messages= this.state.messages.map(message => (
        <li key={message.id}>
          <p>{message.author}</p>
          <p>{message.text}</p>
          <button type ='button' onClick={() => this.deleteMessage(message.id)}>delete</button>
          <button type ='button' onClick={() => this.editMeaage(message.id)}>edit</button>
        </li>
      ));
      return(
        <>
          <ul>{messages}</ul>
          <section className="main">
            <form onSubmit={this.addMessage}>
              <input  className="text" type="text" name="text" value={this.state.text} onChange={this.handleInput}/>
              <button className="button" type="submit">Send Message</button>
            </form>
          </section>
        </>
      )
    }
}

export default ChatList;
