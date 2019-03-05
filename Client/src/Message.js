import React, {Component} from 'react';
import io from "socket.io-client";

class Message extends Component
{

	constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        }

         this.socket = io.connect('localhost:5000');

         const addMessage = (data) =>
         {	console.log(data);
         	this.setState({messages: [...this.state.messages, data]});
         	console.log(this.state.messages);
         }

         this.sendMessage = ev =>
         {
         	ev.preventDefault();

         	if(this.state.message == '')
         	{
         		alert("Please enter a message before sending");
         	}
         	else
         	{
         	this.socket.emit ('data' , {
         		username: this.props.username,
         		message: this.state.message
         	});
         }
         this.state.message = '';

         }

         this.socket.on('data', function(data)
         {
         	addMessage(data);
         });

}


//scroll to bottom on recieving new messages
componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }
//end




	render()
	{
		return(
			
			<span className="block"> 
				<div id="header" > <span id="welcome"> Welcome {this.props.username}, You are online now </span> </div>
				<div id="output">
						{this.state.messages.map(message => {

							return (<div id="bubble"> <strong> <span id="userName"> {message.username}</span> <hr /> </strong>  {message.message} </div>
							
							)
						})}

					<div ref={el => { this.el = el; }} />
				  </div>
			 

			 <span className="InputMessage">
				
				<span><input type="text" value = {this.state.message } onChange = {ev=> this.setState({message: ev.target.value})} /></span>
				<span><button type="button" id="send" onClick = {this.sendMessage} > Send </button></span>
				
			</span>
			</span>
			 
			)
	}
}

export default Message;