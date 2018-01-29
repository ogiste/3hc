import React from 'react';
import theme from '../helpers/themeMui';
import { Grid as InlineGrid, Row as InlineRow, Cell as InlineCell } from 'react-inline-grid';
import FooterChip from '../partials/homeFooterChips';

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
		 	<footer className="homeFooter">
		 	<InlineGrid>
		 	<div className="footerRowWidth">
		 		<InlineRow  >
		 			<InlineCell is="3 tablet-3 phone-3">
		 				<ul>
		 					<FooterChip label="Home" /> 
		 					<FooterChip label="Contact Us" /> 
		 					<FooterChip label="About Us" />
		 				</ul>
		 			</InlineCell>
		 			<InlineCell is="3 tablet-3 phone-3">
		 				<ul>
		 					 <FooterChip label="Music" slash="music"/> 
		 					<FooterChip label="Downloads" slash="music"/> 
		 					<FooterChip label="New Releases" slash="countdown"/> 
		 				</ul>
		 			</InlineCell>
		 			<InlineCell is="3 tablet-3 phone-3">
		 				<ul>
		 					<FooterChip label="Blog" /> 
		 					<FooterChip label="Events" /> 
		 					<FooterChip label="Bookings" /> 
		 				</ul>
		 			</InlineCell>
		 		</InlineRow>
		 	</div>
		 	</InlineGrid>
		 	</footer>
	   );
   }

}

export default HomeFooter;