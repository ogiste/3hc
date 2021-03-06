//header nav for homepage

import React from 'react';
import AppBar from 'material-ui/AppBar';
import LongMenu from '../partials/longMenu.js';
import DrawerMatapes from '../partials/Nav/drawerMatapes.js';
import isInt from '../helpers/validateType';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class AppBarHome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	appBar:'yes'};
  }



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

export default AppBarHome;