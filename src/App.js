import React, { useState, useEffect } from "react";
import Nav from './components/Nav.js'

const App = () => {
	const pullItems = async function(offset) {
		//needs error handling
		let response = await fetch(`https://shielded-peak-43727.herokuapp.com/etsy/shops/6127899/listings/active/?limit=8${offset}`)
		const items = await response.json();
		console.log(items)
		return items;
	}
	
	const makePageArray = function(itemArray) {
		let arr = []
		for (let i = 0; i < Math.ceil(itemArray.count / 8); i++) {
			arr.push(`&offset=${i*8}`)
		}
		console.log(arr)
		return arr
	}
	
	const pullItemImages = async function (id) {
		// needs some error handling
		const response = await fetch(`https://shielded-peak-43727.herokuapp.com/etsy/listings/${id}/images`)
		const obj = await response.json();
		return obj;
	}
	
// 	const updatePage = async function () {
	const updatePage = function () {
		console.log('hmm…')
// 		const pageArray = makePageArray(items)
// 		const itemArray = await pullItems(pageArray[1])
// 		let imageArray = [];
// 		for (const result of itemArray.results) {
// 			const imageSet = await pullItemImages(result.listing_id)
// 			await imageArray.push(imageSet)
// 		}
// 		await setImages(imageArray)
// 		await setItems(itemArray)
	}
	
	const findImageObj = function (id, array) {
		let arr = array.filter(element => Number(element.params.listing_id) === Number(id))
		return arr[0]
	}
	
	const getData = async function(offset) {
		const allItems = await pullItems(offset);
		let allImages = [];
		for (const result of allItems.results) {
			const imageSet = await pullItemImages(result.listing_id)
			await allImages.push(imageSet)
		}
		await setImages(allImages)
		await setItems(allItems)
		await setPageArray(makePageArray(allItems))
	}
	
	const [items, setItems] = useState({results: []});
	const [images, setImages] = useState([]);
	const [pageArray, setPageArray] = useState([])
	
	useEffect(() => {
		getData('&offset=0')
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
						{findImageObj(result.listing_id, images) ? <li><img src={findImageObj(result.listing_id, images).results[0].url_570xN}/></li> : <li></li>}
					</ul>
				</li>
			))}
 			</ul>
 			<p> Page: 
 			{pageArray && pageArray.map((page) => (<a style={{marginRight: "5px"}} href="javascript:void(0)" onClick={() => getData(page)}>{pageArray.indexOf(page)+1}</a>))}
 			</p>
		</div>
	);
};

export default App;
