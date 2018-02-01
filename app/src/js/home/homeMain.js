import React from 'react';
import HomeHeader from './homeHeader';
import HomeBodyGrid from './homeBodyGrid';
import MusicMain from '../music/musicMain.js';
import TimerMain from '../timer/timerMain';
import {Route,Switch} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import { Grid as InlineGrid, Row as InlineRow, Cell as InlineCell } from 'react-inline-grid';
import HomeFooter from './homeFooter';

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
				<div style={{ minHeight:600 ,padding: 26 ,marginTop:60}} >
					<InlineGrid>
						<Switch>
							<Route exact path="/" component={HomeBodyGrid} />
							<Route exact path="/music" component={MusicMain}/>
							<Route exact path="/countdown" component={TimerMain}/>
						</Switch>
						
					</InlineGrid>
					
				</div>

				<HomeFooter/>
			</div>
	   );
   }

}

export default HomeMain;