import React from 'react';
import Clock from './clock.js';
import TextField from 'material-ui/TextField';
import isInt from '../helpers/validateType';
import RaisedButton from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  paper: {
    padding: 16,
    textAlign: 'center',
  },
});

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
		const { classes } = this.props;

		return(
			<Grid container  alignItems="center" >
				<Grid item xs={12}>
		          		<Paper className={classes.paper}>
		          	         <Typography> 
		          	         	 Countdown to {this.state.deadline}
		          	         </Typography>
		          	         <Divider/>
		          	          <Clock deadline={this.state.deadline} />
		          	          <div>
		          			      <TextField
		          			          id="CountdownDate"
		          			          label="Set Countdown Date"
		          			          placeholder="Set New Date"
		          			          margin="normal"
		          			          onChange={event=>this.setState({newDeadline: event.target.value})}
		          			        />
		          			      <br/>
		          		          <RaisedButton raised color="secondary" 
		          		          	onClick={()=>this.setDeadline()}>
		          			        Submit
		          			      </RaisedButton>
		          	          </div>
		                    </Paper>
		        </Grid>
			</Grid>);
	}

}

export default withStyles(styles)(CountdownTimer);