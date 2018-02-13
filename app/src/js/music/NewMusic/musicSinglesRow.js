
import {  Row as InlineRow } from 'react-inline-grid';
import React from 'react';
import MusicSingleCard from '../musicMediaCard';

export default function  MusicSinglesRow(props){
return(
	
	     <InlineRow className="pos-rel">
			<MusicSingleCard/>
			<MusicSingleCard/>
			<MusicSingleCard/>
		</InlineRow>

);
}