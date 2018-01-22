




import React from 'react';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MusicCard from './musicCard.js';

export default class MusicMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  

  render() {
    return (
      <section className="music-main-section">
      	<Subheader ><h2>Music</h2></Subheader>
          <Divider />
        <div>
        <MusicCard/>
        </div>
      </section>
    );
  }
}


