import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Grid as InlineGrid, Row as InlineRow, Cell as InlineCell } from 'react-inline-grid';

const styles = {
  card: {
    maxWidth: 345
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
    </InlineCell>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);