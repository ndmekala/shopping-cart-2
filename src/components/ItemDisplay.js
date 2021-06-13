import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";

const ItemDisplay = (props) => {
	let { listingID } = useParams();
	console.log('hi')
	console.table(props)
	let itemData

	const findData = function() {
		let arr = props.itemDataset.filter(element => element.id == listingID)
		itemData = arr[0]
	}
	findData();
	console.table(itemData)
	
	return (
		<Container >
	<h1>{itemData.title}</h1>
	{itemData.imageData.results.map((imgResult) => (
		<img src={imgResult.url_570xN}/>
		
	))}
	<p>{itemData.description}</p>
	<p>{itemData.price}</p>
		</Container>
	
	);
}

export default ItemDisplay;