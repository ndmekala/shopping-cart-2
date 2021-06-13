import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";

const ItemDisplay = (props) => {
	let { listingID } = useParams();
	console.log('hi')
	console.table(props)

	// const findData = function () {
		// props.itemDataset.forEach((page) => )
	// }

	const data = function() {
		let arr = props.itemDataset.filter(element => element.id == listingID)
		return arr
	}

	console.table(data())




	// const findData = function () {
	// 	let arr = props.itemDataset.filter(
	// 	  (element) => Number(element.params.listing_id) === Number(listingID)
	// 	);
	// 	return arr[0];
	//   };
	
	return (
		<Container >
	<h1>Hi from ItemDisplay</h1>

	{/* <pre>{JSON.stringify(findImageObj(), null, 2)}</pre> */}
	{/* {findImageObj().results.map((imgResult) => (<img */}
	{/* key = {imgResult.listing_image_id} */}
	{/* src = {imgResult.url_570xN} />))} */}
	{/* <h2>{props.itemDataset[]}</h2> */}
	<h2>{listingID}</h2>
	{/* <p>{props.itemDataset[0][7].id}</p> */}
	<pre>{JSON.stringify(data(), null, 2)}</pre>
	{/* <pre>{JSON.stringify(props.imageData[0].params.listing_id, null, 2)}</pre> */}
	{/* <pre>{JSON.stringify(props.imageData, null, 2)}</pre> */}
	<pre>{JSON.stringify(listingID), null, 2}</pre>
	{/* {findImageObj.results.map((result) => (
		<img src={result.url_75x75} />
	))} */}
		</Container>
	
	);
}

export default ItemDisplay;