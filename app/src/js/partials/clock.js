//clock.jsx
import React from 'react';
import isInt from '../helpers/validateType';
import {List, ListItem,ListItemText} from 'material-ui/List';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	days:0,
    	hours:0,
    	minutes:0,
    	seconds:0
    };
  }

  tick(prevState) {
   
    this.setState({seconds: (prevState.seconds - 1)});
    if (this.state.seconds <= 0 && this.state.days<=0) {
      clearInterval(this.interval);
    }else if(this.state.seconds <= 0){
      if(this.state.minutes > 0 && this.state.seconds <= 0){
      this.setState({minutes: (prevState.minutes - 1)});
      this.setState({seconds: 60});
      }else if(this.state.hours>0 && this.state.minutes ==0){
      this.setState({hours: (prevState.hours - 1)});
      this.setState({minutes: 60});

      }else if(this.state.days > 0 && this.state.hours==0){
        this.setState({days: (prevState.days - 1)});
        this.setState({hours: 24});
      }
    }
  }



  componentDidMount() {
    let duration = this.getTimeUntil(this.props.deadline);

    this.setState( {
      seconds: duration.seconds,
      minutes:duration.minutes,
      hours:duration.hours,
      days:duration.days });

    this.interval = setInterval(()=>this.tick(this.state), 1000);
  }

componentWillReceiveProps(nextProps) {
  console.log(nextProps.deadline);
  let duration = this.getTimeUntil(nextProps.deadline);

    this.setState( {
      seconds: duration.seconds,
      minutes:duration.minutes,
      hours:duration.hours,
      days:duration.days });

}

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  getTimeUntil(deadline){
    const time_left = Date.parse(deadline) - Date.parse(new Date());
    if( isInt(time_left) && time_left>0){
      console.log("time: ",time_left);
    const seconds = Math.floor(time_left/1000%60);
    const minutes = Math.floor(time_left/1000/60 %60);
    const hours = Math.floor(time_left/(1000*60*60)%24);
    const days = Math.floor(time_left/(1000*60*60*24));
    return {seconds: seconds,minutes:minutes,hours:hours,days:days};
  }else{
    const time_left = Date.parse("December 25, 2018") - Date.parse(new Date());
    const seconds = Math.floor(time_left/1000%60);
    const minutes = Math.floor(time_left/1000/60 %60);
    const hours = Math.floor(time_left/(1000*60*60)%24);
    const days = Math.floor(time_left/(1000*60*60*24));
    console.log("deadline: "+ deadline+ " is not a valid date to countdown for");
    return {seconds: seconds,minutes:minutes,hours:hours,days:days};
  }
    
  }

  render() {
    return (
      <div>
      <ListItem >
          <ListItemText primary={ this.state.days +' Days '} />
        </ListItem>
        <div  > 
          <ListItem>
            <ListItemText primary={ this.state.hours +' Hours ' }  />
          </ListItem>
        </div>
        <ListItem >
          <ListItemText primary={ this.state.minutes +' Minutes '}   />
        </ListItem>
        <ListItem >
          <ListItemText primary={ this.state.seconds + ' Seconds '}  />
        </ListItem>
	  </div>
    );
  }
}

export default Clock;