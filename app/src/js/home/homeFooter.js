import React from 'react';
import theme from '../helpers/themeMui';
import { Grid as InlineGrid, Row as InlineRow, Cell as InlineCell } from 'react-inline-grid';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class HomeFooter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	appFooter:'yes'};
  }



render(){
		return(
		 	<div className="homeFooter">
		 	<InlineGrid>
		 		<InlineRow >
		 			<InlineCell is="4 tablet-4 phone-4">
		 				<ul>
		 					<li>Home</li>
		 					<li>Contact Us</li>
		 					<li>About Us</li>
		 				</ul>
		 			</InlineCell>
		 			<InlineCell is="4 tablet-4 phone-4">
		 				<ul>
		 					<li>Music</li>
		 					<li>Downloads</li>
		 					<li>New Releases</li>
		 				</ul>
		 			</InlineCell>
		 			<InlineCell is="4 tablet-4 phone-4">
		 				<ul>
		 					<li>Blog</li>
		 					<li>Shows</li>
		 					<li>Bookings</li>
		 				</ul>
		 			</InlineCell>
		 		</InlineRow>
		 	</InlineGrid>
		 	</div>
	   );
   }

}

export default HomeFooter;