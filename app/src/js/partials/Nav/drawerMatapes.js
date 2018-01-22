import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

export default class DrawerMatapes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle=() => this.setState({open: !this.state.open});
    this.handleClose = () => this.setState({open: false});
  }

  

  render() {
    return (
      <div>
        <IconButton
          label="Matapes"
          onClick={this.handleToggle}>
          <MenuIcon/>
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Subheader >Hip~Hop~Heavy Cong.</Subheader>
          <Divider />
            <MenuItem onClick={this.handleClose} primaryText="Home" containerElement={<Link to="/" />} />
            <MenuItem onClick={this.handleClose} primaryText="Music" containerElement={<Link to="/music" />} />
            <MenuItem onClick={this.handleClose} primaryText="Countdown" containerElement={<Link to="/countdown" />} />
            <MenuItem onClick={this.handleClose} primaryText="Contacts" />
        </Drawer>
      </div>
    );
  }
}