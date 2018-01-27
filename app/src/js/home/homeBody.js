//home body

import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from '../partials/Nav/appBar.js';
import { withStyles } from 'material-ui/styles';
import HomeMain from './homeMain.js';
import theme from '../helpers/themeMui';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import HomeMediaCard from './homeMediaContentCard';
import { Grid as InlineGrid, Row as InlineRow, Cell as InlineCell } from 'react-inline-grid';
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class HomeBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {homeBody:true};
  }

render(){
		return(
				    <Grid container spacing={24}>
				    	<div className="pos-rel">
				       <Grid item  className="homeBannerMain" xs={12} >
				       	<div className="homeBannerContainer" style={ {position:'relative'} }>
					       	<div className="homeBanner"></div>
					       	<div className="homeHeadlineContainer">
					       		<div className="homeHeadlineTitle">
							        <Typography color="secondary" type="display3" align="center">
							         	<b>HIPHOP HEAVY CONGLOMERATE.</b>
							        </Typography>
						        </div>
					        </div>
				       	</div>
				       	
				       </Grid>
				       <Grid item xs >

				       </Grid>
				       <InlineGrid >
					       	<InlineRow >
					       		<div>
							       <Typography type="headline" >
								      				The Latest
								   </Typography>
						      		<Divider/>
						      	</div>
					       	</InlineRow>
					      		<InlineRow >
							       		<HomeMediaCard/>
						       	</InlineRow>
					    </InlineGrid>
					    </div>
				    </Grid> 
		      
	   );
   }

}

export default HomeBody;