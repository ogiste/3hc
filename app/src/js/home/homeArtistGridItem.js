
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import AudioTrackIcon from 'material-ui-icons/Audiotrack';
import { Grid as InlineGrid, Row as InlineRow, Cell as InlineCell } from 'react-inline-grid';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  titleBar: {
    background:
      '#000a12',
  }
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function SingleLineGridItem(props) {
  const { classes } = props;

  return (
      <InlineCell  className="artistTileContainer" is="4 tablet-4 phone-4" >
          <GridListTile className="artistTileContainer">
            <div className="artistTileDiv">
            <img className="artistTileImage" src="/images/home/artists/kili.jpg" alt= "KiliHippie" />
            <GridListTileBar
              title="KiliHippie Profile"
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <div>
                  <IconButton >
                    <AudioTrackIcon className={classes.title} />
                  </IconButton>
                  <IconButton >
                     <PersonPinIcon className={classes.title}/>
                  </IconButton>
                </div>
               
              }
            />
            </div>
          </GridListTile>
      </InlineCell>
  );
}

SingleLineGridItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridItem);