import React, { useState, useEffect } from "react";
import Nav from './components/Nav.js'

const App = () => {
// 	fetch('https://shielded-peak-43727.herokuapp.com/weather/?q=minneapolis')
// 	.then(response => response.json())
// 	.then(json => console.log(json))
// 	.catch(error => console.log(error))
// 	
// 	fetch('https://shielded-peak-43727.herokuapp.com/etsy/shops/6127899/listings/active')
// 	.then(response => response.json())
// 	.then(json => console.log(json))
// 	.catch(error => console.log(error))
	const pullItems = async function() {
		//needs error handling
		const response = await fetch('https://shielded-peak-43727.herokuapp.com/etsy/shops/6127899/listings/active')
		const items = await response.json();
		console.log(items)
		return items;
	}
	
	const pullItemImages = async function (id) {
		// needs some error handling
		const response = await fetch(`https://shielded-peak-43727.herokuapp.com/etsy/listings/${id}/images`)
		const obj = await response.json();
		console.log(obj)
		return obj;
	}
	
	const findImageObj = function (id, array) {
		let arr = array.filter(element => Number(element.params.listing_id) === Number(id))
		console.log(arr)
		return arr
	}
	
	const getAllData = async function() {
		const allItems = await pullItems();
		let allImages = [];
		for (const result of allItems.results) {
			const imageSet = await pullItemImages(result.listing_id)
			await allImages.push(imageSet)
			console.log(allImages)
		}
		await setImages(allImages)
		await setItems(allItems)
	}
	
	const [items, setItems] = useState({results: []});
	const [images, setImages] = useState([]);
	
	useEffect(() => {
		getAllData()
	}, []);
	
	return (
		<div>
			<Nav />
			<h1>Hello from App</h1>
			<ul>
			{items && items.results.map((result) => (
				<li key={result.listing_id}>
					<a href={result.url}>{result.title}</a>
					<ul>
						<li>{result.description}</li>
						<li>${result.price}</li>
						{/*<li>{findImageObj(result.listing_id, images).results[0].listing_image_id}</li>*/}
					</ul>
				</li>
			))}
 			</ul>
		</div>
	);
};

export default App;
