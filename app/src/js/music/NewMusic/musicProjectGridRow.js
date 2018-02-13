import {  Row as InlineRow,Cell as InlineCell } from 'react-inline-grid';
import React from 'react';
import MusicProjectCard from './projectGridCard';

export default function  MusicProjectRow(props){
return(
	
	     <InlineRow className="pos-rel">
	     	<InlineCell>
				<MusicProjectCard/>
			</InlineCell>
		</InlineRow>

);
}