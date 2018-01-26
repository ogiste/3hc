import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div style={ {position:'relative'} }>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/images/cards/KeepUp.jpg"
          title="A Cypher Jam Called Keep Up"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            A Cyper Jam Called 'Keep Up' 
          </Typography>
          <Typography component="p">
            Featuring the lyrical bombardment of veterans <b>Phaze</b> & <b>Truff Will</b> and kicking off with freshman <b>OGi</b>.
            This is for the lyrically apt experiencing some of that golden era nostalgia.
          </Typography> 
        </CardContent>
        <CardActions>
          <Button dense color="secondary">
            Share
          </Button>
          <Button dense color="primary">
            Listen
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);