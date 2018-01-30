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
import HomeMusicFeature from './homeMusicCards';
import HomeArtistFeature from './homeArtistTileRow';
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
class HomeBodyGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {homeBody:true};
  }

render(){
		return(
				<div className="pos-rel">
				    <InlineGrid className="homeBannerMain">
					    <div>
						     <InlineGrid className="homeBannerContainer">
							       	<InlineRow className="pos-rel">

							       		<InlineCell className="homeBannerMain" is="12 tablet-12 phone-12" >
									       	
									       	<div className="homeHeadlineContainer">
									       	<div className="homeBannerBg"></div>
									       		<div className="homeHeadlineTitle">
											        <Typography className="homeBannerTitleText" type="display3" align="center">
											         	<b>HIPHOP HEAVY CONGLOMERATE.</b>
											        </Typography>
										        </div>
									        </div>
								       	</InlineCell>
							       		
							       	</InlineRow>
						     </InlineGrid>
						     <InlineGrid>
						     	<div>
						     	<InlineRow >
							       		<div className="cardContentTitleCont" >
									       <Typography type="headline" >
										      				The Latest
										   </Typography>
								      		<Divider/>
								      	</div>
							    </InlineRow>
							     <HomeMusicFeature/>
								</div>
							</InlineGrid>
							<InlineGrid>
								<div style={{padding:5}}>
									<InlineRow>
										<Typography type="headline" >
										The Squad
										</Typography>
										
									</InlineRow>
									<Divider/>
									<HomeArtistFeature/>
								</div>
								
							</InlineGrid>
						</div>
					</InlineGrid> 
				</div>
		      
	   );
   }

}

export default HomeBodyGrid;