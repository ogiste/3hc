

import HomeMediaCard from './homeMediaContentCard';
import {  Row as InlineRow } from 'react-inline-grid';
import React from 'react';

export default function HomeMusicRow(props){
return(
	
	     <InlineRow className="pos-rel">
			<HomeMediaCard/>
			<HomeMediaCard/>
			<HomeMediaCard/>
		</InlineRow>

);
}