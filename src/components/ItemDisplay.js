import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

const ItemDisplay = (props) => {
	let { listingID } = useParams();
	const findImageObj = function () {
		let arr = props.imageData.filter(
		  (element) => Number(element.params.listing_id) === Number(listingID)
		);
		return arr[0];
	  };
	
	return (
	<div>
	<h1>Hi from ItemDisplay</h1>
	{/* <pre>{JSON.stringify(findImageObj(), null, 2)}</pre> */}
	{findImageObj().results.map((imgResult) => (<img
	key = {imgResult.listing_image_id}
	src = {imgResult.url_570xN} />))}
	<h2>{listingID}</h2>
	<pre>{JSON.stringify(props.imageData[0].params.listing_id, null, 2)}</pre>
	<pre>{JSON.stringify(props.imageData, null, 2)}</pre>
	<pre>{JSON.stringify(listingID, null, 2)}</pre>
	{/* {findImageObj.results.map((result) => (
		<img src={result.url_75x75} />
	))} */}
	</div>	
	);
}

export default ItemDisplay;