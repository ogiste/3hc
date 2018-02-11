import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {fade} from 'material-ui/styles/colorManipulator';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import PlayIcon from 'material-ui-icons/PlayArrow';
import ShareIcon from 'material-ui-icons/Share';
import MoreHorizIcon from 'material-ui-icons/MoreHoriz';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Grid as InlineGrid, Row as InlineRow, Cell as InlineCell } from 'react-inline-grid';

const styles = {
  card: {
    maxWidth: 345
  },
  det_card:{color:'white'},
  bg_content:{backgroundColor:'#000a12'},
  bg_play_action:{
    color:'#ffff',
    backgroundColor:'transparent',
    boxShadow: '0 0 0 0 rgba(75, 160, 75,0)',
    '&:hover':{
      
      backgroundColor:'rgba(75, 160, 75,0.5)',
      webkitAnimation: 'pulse 0.6s infinite cubic-bezier(0.05,0.1,0.25,1)',
    mozAnimation: 'pulse 0.6s infinite cubic-bezier(0.05,0.1,0.25,1)',
    msAnimation: 'pulse 0.6s infinite cubic-bezier(0.05,0.1,0.25,1)',
    animation:' pulse 0.8s infinite cubic-bezier(0.05,0.1,0.25,1)'
    }

  },
  bg_more_action:{
    color:'#ffff',
    backgroundColor:'transparent',
    boxShadow: '0 0 0 0 rgba(239, 237, 237,0)',
    transition:"box-shadow 0.8s ease,background-color 0.1s ease,color 0.2s ease",
    '&:hover':{
        color:'#000',
        boxShadow: '0 0 4px 5px rgba(239, 237, 237,0.2)',
        backgroundColor:'rgba(239, 237, 237,0.85)'
    }
  },
  bg_share_action:{
    color:'#ffff',
    backgroundColor:'transparent',
    transition:'ease',
    '&:hover':{
      msAnimation:' pulse_share 4s cubic-bezier(0.05,0.1,0.25,1)',
      mozAnimation:' pulse_share 4s cubic-bezier(0.05,0.1,0.25,1)',
      webkitAnimation:' pulse_share 4s cubic-bezier(0.05,0.1,0.25,1)',
      animation:' pulse_share 4s infinite cubic-bezier(0.05,0.1,0.25,1)',
      backgroundColor:'rgba(255, 121, 97, 0.85)',
    }

  },
  pulseEff:{
    webkitAnimation: 'pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1)',
    mozAnimation: 'pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1)',
    msAnimation: 'pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1)',
    animation:' pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1)'
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <InlineCell className="homeBodyCardContainer" is="4 tablet-4 phone-4">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/images/cards/KeepUp.jpg"
          title="A Cypher Jam Called Keep Up"
        />
        <CardContent className={classes.bg_content}>
          <Typography className={classes.det_card} type="headline" component="h2">
            A Cyper Jam Called 'Keep Up' 
          </Typography>
          <Typography className={classes.det_card} component="p">
            Featuring the lyrical bombardment of veterans <b>Phaze</b> & <b>Truff Will</b> and kicking off with freshman <b>OGi</b>.
            This is for the lyrically apt experiencing some of that golden era nostalgia.
          </Typography> 
        </CardContent>
        <CardActions className={classes.bg_content}>
          <Button  classes={{root:classes.bg_share_action}} color="secondary">
            Share
            <ShareIcon/>
          </Button>
          <Button  classes={{root:classes.bg_play_action}}  >
                  Play
                  <PlayIcon/>
          </Button>
          <Button  classes={{root:classes.bg_more_action}}  >
                  Details
                  <MoreHorizIcon/>
          </Button>
        </CardActions>
      </Card>
    </InlineCell>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);