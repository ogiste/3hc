import React from 'react';
import Paper from 'material-ui/Paper';
import {  Row as InlineRow , Cell as InlineCell} from 'react-inline-grid';
import TextField from 'material-ui/TextField';


class HomeSubscribeRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    	homeSubRow:'yes'};
  }



render(){
		return(
			<InlineRow>
				<InlineCell  is="12 tablet-12 phone-12" >
				<div className="homeMessageContainer">
					
							<div className="homeMessageBox">
								<div className="homeMessBoxBg"></div>
								<Paper elevation={6} className="homeMessBoxForm">
									<div className="homeMessInnerBg"></div>
										<div  className="homeMessInner">
											
											<TextField
											
									          id="Title"
									          label="Title"
									          placeholder="About..."
									          margin="normal"


									        /><br/>
									        <TextField
									          id="email"
									          label="Drop your email"
									          placeholder="supp@rtmusic.com"
									          margin="normal"
									          fullWidth
									        />
									        <TextField
									          id="message_textarea"
									          label="What's good? What's not?"
									          placeholder="Tell us what you think "
									          multiline
									          fullWidth
									          rows="4"
									          margin="normal"
									        />
										
										</div>
								</Paper>
						 </div>
				</div>
				
				</InlineCell>
			</InlineRow>
	   );
   }

}

export default HomeSubscribeRow;