import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FaceIcon from 'material-ui-icons/Face';
import DoneIcon from 'material-ui-icons/Done';
import {Link} from "react-router-dom";
const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function FooterChip(props) {
  const { classes ,label,slash} = props;
  if (label && slash) {

        return (
          <div >
            <Chip className="chipFooterDiv"
              component={Link}
              to={"/"+slash}
              label={label}
            />
            
          </div>
        );
  } else { 
     const def_slash=" ";
    if (label) {
     
      return (
          <div >
            <Chip className="chipFooterDiv"
              component={Link}
              to={"/"}
              label={label}
            />
            
          </div>
        );

    } else {
      props.label=" Label Me";
      return (

          <div >
            <Chip className="chipFooterDiv"
              component={Link}
              to={"/"}
              label={label}
            />
            
          </div>
        );
    }
    
        
  }
  
}

FooterChip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterChip);