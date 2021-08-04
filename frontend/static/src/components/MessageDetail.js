import {Component} from 'react';
import Moment from 'react-moment';

class MessageDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      text: this.props.message.text
    }
    this.handleInput = this.handleInput.bind(this);
    this.saveMessage = this.saveMessage.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  saveMessage() {
    this.props.editMessage(this.props.message.id, this.state.text);
    this.setState({isEditing: false});
  }

  render() {
    const message = this.props.message;
    return (<li className="message">
      <div className="time">
        <p>{message.author}</p>
        <Moment format="hh:mm:ss">{message.time}</Moment>
      </div>
      <div className="messageContent">
        {
          this.state.isEditing
            ? <input type="text" value={this.state.text} onChange={this.handleInput} name="text" autoComplete="off"/>
            : <p className="messageText">{message.text}</p>
        }
        <div className="settingButtons">
          {message.is_owner && <div onClick={() => this.props.deleteMessage(message.id)}>delete</div>}
          {
            this.state.isEditing
              ? <button className="settingButtons" type='button' onClick={this.saveMessage}>save</button>
              : message.is_owner && <div onClick={() => this.setState({isEditing: true})}>edit</div>
          }
        </div>
      </div>
    </li>);
  }

}

export default MessageDetail;
