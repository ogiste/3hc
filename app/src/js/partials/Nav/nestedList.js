import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import MusicLibraryIcon from 'material-ui-icons/LibraryMusic';
import TimerIcon from 'material-ui-icons/Timer';
import HomeIcon from 'material-ui-icons/Home';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import AudioTrackIcon from 'material-ui-icons/Audiotrack';
import FileDownloadIcon from 'material-ui-icons/FileDownload';
import PlayCircleFilledIcon from 'material-ui-icons/PlayCircleFilled';
import {Link} from 'react-router-dom';

// backgroundColor: theme.palette.background.paper,
const styles = theme => ({
  rootList: {
    width: '100%',

    maxWidth: 360,
    
    
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  
  constructor(props){

    super(props);
    this.state = { open: true };

  }

  

  handleClick = ()=>{
    this.setState({ open: !this.state.open });
  }

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.rootList} subheader={<ListSubheader>HipHopHeavy Cong.</ListSubheader>}>
        <ListItem component={Link}
            to="/"  button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText inset primary="Home"  />
        </ListItem>
        <div  > 
          <ListItem 
            component={Link}
            to="/countdown" button>
            <ListItemIcon>
              <TimerIcon />
            </ListItemIcon>
            <ListItemText inset primary="Countdown"  />
          </ListItem>
        </div>
        <ListItem  component={Link}
            to="/music" button onClick={this.handleClick}>
          <ListItemIcon>
            <MusicLibraryIcon />
          </ListItemIcon>
          <ListItemText inset primary="Music"  />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse component="li" in={this.state.open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItem component={Link}
            to="/releases" button className={classes.nested}>
              <ListItemIcon>
                <AudioTrackIcon />
              </ListItemIcon>
              <ListItemText inset primary="Music Releases" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FileDownloadIcon />
              </ListItemIcon>
              <ListItemText inset primary="Downloads" />
            </ListItem>{/*
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PlayCircleFilledIcon />
              </ListItemIcon>
              <ListItemText inset primary="Stream" />
            </ListItem>*/}
          </List>
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);