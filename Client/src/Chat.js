import React from 'react';
import Message from './Message.js';
class Chat extends React.Component
{
	state = {
		 username: null
	}

	login = (e) =>
	{
		
				this.setState({
    			username: e.target.value});
  			
		}
	

	clicked = (e) =>
		{
			if(this.state.username == null)
			{
				alert("Please enter username");
			}
			else {

			var box = document.getElementById('box');
			var contentwrap = document.getElementById('contentwrap');



			box.style.display = 'none';
			contentwrap.style.display = 'block';
		}
		}

	render()
	{
		//functions governing the app

		


		//return
		return(

			 <div className="initialise">
      			<div id="box" >
      			<br /> <br />
       				<span id="welcome-text"> WELCOME </span> <br /> <br />
       			 	<span id="username"> Enter Username </span>
       				<br /> <br />
       				 
      					<input type="text" onChange={this.login} id="text-line" />
      					<br /> <br />
      					<button type="button" onClick= {this.clicked} > Join </button> <br /> <br /> <br /> <br />
    				
        		</div> 

     			<div id="contentwrap" >    
				<span >	<Message  username= {this.state.username} /> </span>
				</div>
        	</div>


     		
        	



			);
	}
}

export default Chat;