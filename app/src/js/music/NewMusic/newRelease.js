//New Releases Main Page


import React from 'react';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import theme from '../../helpers/themeMui';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import MusicSinglesRow from './musicSinglesRow';
import MusicProjectRow from './musicProjectGridRow';
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
class MusicReleasesMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {newmusicBody:true};
  }

render(){
		return(
				<div className="pos-rel">
				    <InlineGrid className="musicReleasesMain">
					    
						     		<div>
								       	<InlineRow className="">
								       		<div className="musicReleaseTitleCont" >
										       <Typography type="headline" >
											      				New Tunes
											   </Typography>
									      		<Divider/>
									      	</div>
								       		
								       	</InlineRow>
								       	<MusicSinglesRow/>
								       	<InlineRow className="">
								       		<div className="musicReleaseTitleCont" >
										       <Typography type="headline" >
											      				New Projects
											   </Typography>
									      		<Divider/>
									      	</div>
								       	</InlineRow>
								       	<MusicProjectRow/>
								       	
							       	</div>

						
					</InlineGrid> 
				</div>
		      
	   );
   }

}

export default MusicReleasesMain;