




import React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import MusicMediaCard from './musicMediaCard.js';
import Grid from 'material-ui/Grid';

export default class MusicMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  

  render() {
    return (
      <Grid container justify="center" >
        <Grid item xs={10}>
        	<Typography type="subheading" >
            Music
          </Typography>
            <Divider />
            <div>
              <MusicMediaCard/>
            </div>
        </Grid>
      </Grid>
    );
  }
}


