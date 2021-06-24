import { Component } from 'react';

// import ChatList from './src/components/ChatList.js';

class MessageDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      text: this.props.message.text,
    }
    this.handleInput = this.handleInput.bind(this);
    this.saveMessage = this.saveMessage.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });

  }

  saveMessage() {
    this.props.editMessage(this.props.message.id, this.state.text);
    this.setState({isEditing: false});
  }

  render(){
    const message = this.props.message;
    return (
      <li>
        <p>{message.author}</p>

        {
          this.state.isEditing
          ? <input type="text" value={this.state.text} onChange={this.handleInput} name="text"/>
          : <p>{message.text}</p>
        }

        <button type ='button' onClick={() => this.props.deleteMessage(message.id)}>delete</button>
        {
          this.state.isEditing
          ? <button type ='button' onClick={this.saveMessage}>save</button>
          : <button type ='button' onClick={() => this.setState({isEditing: true})}>edit</button>
        }
      </li>
    );
  }



}

export default MessageDetail;