import React, { useState, useEffect } from "react";
import Shop from './components/Shop.js';
import Welcome from './components/Welcome.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const App = () => {

	const pullShopItems = async function(pageNumber) {
		//needs error handling
		let response = await fetch(`https://shielded-peak-43727.herokuapp.com/etsy/shops/6127899/listings/active/?limit=8&offset=${(pageNumber-1)*8}`)
		const shopItems = await response.json();
		console.log(shopItems)
		return shopItems
	}
	
	const pullItemImages = async function (itemID) {
		// needs error handling
		const response = await fetch(`https://shielded-peak-43727.herokuapp.com/etsy/listings/${itemID}/images`)
		const itemImages = await response.json();
		return itemImages;
	}
	
	const shopPageCount = function(shopItems) {
		return Math.ceil(shopItems.count/8);
	}
	
	const getItemImages = function(itemID, shopImages) {
		let arr = shopImages.filter(element => Number(element.params.listing_id) === Number(itemID))
		return arr[0]
	}
	
	// Okay… so it shouldn’t just have a 1-to-1 relationship between state and shop display. The shop component should display based off of *props*
	
	const getData = async function(pageNumber) {
		const shopItems = await pullShopItems(pageNumber)
		let allItemImages = [];
		for (const result of shopItems.results) {
			const itemImages = await pullItemImages(result.listing_id)
			await allItemImages.push(itemImages)
		}
		await setDisplayedItems(shopItems);
		await setDisplayedItemsImages(allItemImages);
		await setDisplayedPageCount(shopPageCount(shopItems));
	}
	
	const [displayedItems, setDisplayedItems] = useState([]);
	const [displayedItemsImages, setDisplayedItemsImages] = useState([])
	const [displayedPageCount, setDisplayedPageCount] = useState(0);
	const [currentPageDisplayed, setCurrentPageDisplayed] = useState(1)
	
	useEffect(() => {
		getData(currentPageDisplayed)
	}, [currentPageDisplayed]);
	
	return (
		<BrowserRouter>
			<Navbar bg="light" sticky="top" variant="light">
			<Link className="navbar-brand" to="/"><img src="https://cdn.shopify.com/s/files/1/1384/6395/files/RRB_Logo_HMILA_2010_web_x100.png?v=1558565941"/></Link>
			<Nav>
				<Link className="nav-link" to="/">Home</Link>
				<Link className="nav-link" to="/shop">Shop</Link>
			</Nav>
			</Navbar>
			<h1>displayedItems</h1>
			<pre>{JSON.stringify(displayedItems, null, 2)}</pre>
			<h1>displayedItemsImages</h1>
			<pre>{JSON.stringify(displayedItemsImages, null, 2)}</pre>
			<h1>displayedPageCount</h1>
			<pre>{JSON.stringify(displayedPageCount, null, 2)}</pre>
			<h1>currentPageDisplayed</h1>
			<pre>{JSON.stringify(currentPageDisplayed, null, 2)}</pre>
			<Switch>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/shop" component={Shop} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
