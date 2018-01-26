import React from 'react';
import HomeHeader from './homeHeader';
import HomeBody from './homeBody';
import MusicMain from '../music/musicMain.js';
import TimerMain from '../timer/timerMain';
import {Route,Switch} from 'react-router-dom';
import Grid from 'material-ui/Grid';

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
				<div style={{ padding: 26 }} >
					<Grid container spacing={24}>
						<Switch>
							<Route exact path="/" component={HomeBody} />
							<Route exact path="/music" component={MusicMain}/>
							<Route exact path="/countdown" component={TimerMain}/>
						</Switch>

					</Grid>
				</div>
				
			</div>
	   );
   }

}

export default HomeMain;