import React from 'react';
import Clock from './clock.js';
import TextField from 'material-ui/TextField';
import isInt from '../helpers/validateType';
import RaisedButton from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';


class CountdownTimer extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
    	open: false,
    	deadline: 'December 25, 2018',
    	newDeadline: ''};
    this.handleToggle=() => this.setState({open: !this.state.open});
    this.handleClose = () => this.setState({open: false});
  }


  setDeadline(){

  const time_left = Date.parse(this.state.newDeadline) - Date.parse(new Date());
  if( isInt(time_left) && time_left>0){
      this.setState({deadline: this.state.newDeadline});
  	  console.log(this.state);
  }else{
  	console.log('invalid deadline..no changes');

  	}
  }

	render(){
		return(
			<div className='counter-div'>
		         <Typography type="subheading"> <h1> Countdown to {this.state.deadline}</h1></Typography>
		         <Divider/>
		          <Clock deadline={this.state.deadline} />
		          <div>
			          <TextField
				      hintText="'New Date'"
				      floatingLabelText="Set New Date"
				      floatingLabelFixed={true}
				      onChange={event=>this.setState({newDeadline: event.target.value})}
				      />
				      <br/>
			          <RaisedButton type="raised" label="Submit" secondary={true} 
			          	onClick={()=>this.setDeadline()}
			          />
		          </div>
			</div>);
	}

}

export default CountdownTimer;