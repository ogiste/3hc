import React from 'react';

import  'typeface-roboto';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'; 
import Subheader from 'material-ui/Subheader';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component { 




  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    	open: false,
    };

	 this.handleClick = event => {
	    this.setState({ open: true, anchorEl: event.currentTarget });
	 };

	 this.handleRequestClose = () => { 
	    this.setState({ open: false });
	 };


  }
  
  render() {
    return (
     		 <div>
		        <IconMenu 
				    iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
				    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
				    targetOrigin={{horizontal: 'left', vertical: 'top'}}
				    maxHeight={272}
				  >
		          {options.map(option => (
		            <MenuItem key={option} selected={option === 'Callisto'} >
		              {option}
		            </MenuItem>  
		          ))}
		        </IconMenu>

      		</div>
    );
  }
}

export default LongMenu;