import React from 'react';
import ReactDOM from 'react-dom';
import profileStore from './profile/matapesStore.js';
import MusicMain from './music/musicMain.js';
import HomeMain from './home/homeMain.js';
import "../../../public/css/style.css";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';
 
console.log("React JS. Tell them I'm coming!");

ReactDOM.render(

	<MuiThemeProvider >
		<BrowserRouter >
			<HomeMain/>
	    </BrowserRouter>
    </MuiThemeProvider >, 
    document.getElementById('matapesRoot')
    );