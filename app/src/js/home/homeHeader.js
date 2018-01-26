//header nav for homepage

import React from 'react';
import AppBarHome from '../partials/Nav/appBar.js';
import LongMenu from '../partials/Nav/rightNavMenu.js';
import theme from '../helpers/themeMui';
import Toolbar from 'material-ui/Toolbar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class HomeHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	appBar:'yes'};
  }



render(){
		return(
		 <AppBarHome />
	   );
   }

}

export default HomeHeader;