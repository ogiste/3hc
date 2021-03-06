import React from 'react';
import HomeHeader from './homeHeader';
import HomeBody from './homeBody';
import MusicMain from '../music/musicMain.js';
import TimerMain from '../timer/timerMain';
import {Route,Switch} from 'react-router-dom';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class HomeMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {home:true};
  }

render(){
		return(
			<div>
				<HomeHeader/>
				<Switch>
				<Route exact path="/" component={HomeBody} />
		        <Route path="/music" component={MusicMain}/>
		        <Route path="/countdown" component={TimerMain}/>
		        </Switch>
			</div>
	   );
   }

}

export default HomeMain;