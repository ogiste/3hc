import React from 'react';
import AppBar from 'material-ui/AppBar';
import LongMenu from '../longMenu.js';
import DrawerMatapes from './drawerMatapes.js';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppBarIcon extends React.Component {

  

render(){
		return(
			<div>
				<AppBar
		          title="3HC"
		          iconElementLeft={ <DrawerMatapes /> }
		          iconElementRight={ <LongMenu /> }
		        />
		        
	         </div>
	   );
   }

}

export default AppBarIcon;