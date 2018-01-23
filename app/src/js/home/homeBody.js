//home body

import React from 'react';


import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AppBar from '../partials/Nav/appBar.js';
import { withStyles } from 'material-ui/styles';
import HomeMain from './homeMain.js';
import theme from '../helpers/themeMui';

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
		<div >
		      <Grid container spacing={24}>
			        <h1> HIP HOP HEAVY CONGLOMERATE.</h1>
		      </Grid>
	    </div>
	   );
   }

}

export default HomeBody;