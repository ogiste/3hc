//home body

import React from 'react';



import AppBar from '../partials/Nav/appBar.js';

import HomeMain from './homeMain.js';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class HomeBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {homeBody:true};
  }

render(){
		return(
		<div >
		
			<h1>This is where you put the rest of the HomeBody</h1>
			
		</div >
	   );
   }

}

export default HomeBody;