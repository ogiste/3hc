import React from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import FileDownloadIcon from 'material-ui-icons/FileDownload';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import AudioTrackIcon from 'material-ui-icons/Audiotrack';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';
import { Grid as InlineGrid, Row as InlineRow, Cell as InlineCell } from 'react-inline-grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class ProjectTrackList extends React.Component {
    

    constructor(props) {
        super(props);
    }

    render() {

    	const { classes } = this.props;

        return (
            <CardContent>
            	<InlineRow>
            		<InlineCell>
            			
            			<List dense={ true }>
			             	<ListItem>
            			      <ListItemText
            			        primary="Tracklist"
            			      />
            			    </ListItem>
            			    <ListItem>
            			      <ListItemAvatar>
            			        <Avatar>
            			          <AudioTrackIcon />
            			        </Avatar>
            			      </ListItemAvatar>
            			      <ListItemText
            			        primary="1.Intro prod by lakesidetrip"
            			      />
            			      <div>
			                      <IconButton aria-label="Play Track">
			                        <PlayArrowIcon />
			                      </IconButton>
				                  <IconButton aria-label="Download Track">
				                     <FileDownloadIcon />
				                  </IconButton>
				                </div>
            			    </ListItem>
            			    <ListItem>
            			      <ListItemAvatar>
            			        <Avatar>
            			          <AudioTrackIcon />
            			        </Avatar>
            			      </ListItemAvatar>
            			      <ListItemText
            			        primary="2.Kinfolk prod by lakesidetrip"
            			      />
            			      <div>
			                      <IconButton aria-label="Play Track">
			                        <PlayArrowIcon />
			                      </IconButton>
				                  <IconButton aria-label="Download Track">
				                     <FileDownloadIcon />
				                  </IconButton>
				                </div>
            			    </ListItem>
            			    <ListItem>
            			      <ListItemAvatar>
            			        <Avatar>
            			          <AudioTrackIcon />
            			        </Avatar>
            			      </ListItemAvatar>
            			      <ListItemText
            			        primary="3.Please prod by Con"
            			      />
			                    <div>
			                      <IconButton aria-label="Play Track">
			                        <PlayArrowIcon />
			                      </IconButton>
				                  <IconButton aria-label="Download Track">
				                     <FileDownloadIcon />
				                  </IconButton>
				                </div>
            			    </ListItem>
            			  	
            			</List>
            		</InlineCell>
            	</InlineRow>
                          
            </CardContent>
        );
    }
}

export default withStyles(styles)(ProjectTrackList);
