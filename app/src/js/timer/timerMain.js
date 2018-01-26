import React from 'react';
import CountdownTimer from '../partials/countdown';

import Grid from 'material-ui/Grid';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class TimerMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page:'timer_main'};
  }

render(){
		return(
			<Grid container justify='center' >
				<CountdownTimer/>
			</Grid>
	   );
   }

}

export default TimerMain;