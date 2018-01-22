import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function MusicCardExpandable(){ 
  return (
    <Card>
      <CardHeader
        title="KiliHippie's New Music"
        subtitle="Free KiliHippie Tracks"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label="Download Tracks" />
        <FlatButton label="View Artist" />
      </CardActions>
      <CardText expandable={true}>
        KiliHippie is constantly searching for the intersection between being Hip hop and African.
      </CardText>
    </Card>
  );
}

export default MusicCardExpandable;