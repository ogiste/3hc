

import React from 'react';
import HomeArtistTile from './homeArtistGridItem';
import {  Row as InlineRow } from 'react-inline-grid';


export default function HomeMusicRow(props){
return(
	
	     <InlineRow className="artistTileContainer">
			<HomeArtistTile/>
			<HomeArtistTile/>
			<HomeArtistTile/>
		</InlineRow>

);
}