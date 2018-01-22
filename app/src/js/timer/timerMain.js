import React from 'react';
import CountdownTimer from '../partials/countdown';

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
			<section>
				<CountdownTimer/>
			</section>
	   );
   }

}

export default TimerMain;