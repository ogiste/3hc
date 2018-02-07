import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MoreVert from 'material-ui-icons/MoreVert';
import DrawerList from './nestedList';
import NavRightMenu from './rightNavMenu';
const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
    height:'100%',
  },
  listFull: {
    width: 'auto',
  },
  drawerCont:{
    backgroundColor:"#f44336"
  },
  paperAnchorLeft:{
    backgroundColor:"#ba000d"
  }
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    

    const drawer = (
        <div >
        <Drawer classes={{ paper:classes.drawerCont}} open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div 

            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
          <div className={classes.list}>
            <DrawerList/>
          </div>
          </div>
        </Drawer>
      </div>
      
    );

    return (
      <div className={`${classes.root} homeBar`}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              3HC
            </Typography>
            {(
              <NavRightMenu/>
            )}
          </Toolbar>
        </AppBar>
        {drawer}
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);