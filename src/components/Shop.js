import React, { useState, useEffect } from "react";
import DisplayCard from './DisplayCard.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pagination from 'react-bootstrap/Pagination'

const Shop = () => {
	const pullItems = async function(offset) {
		//needs error handling
		let response = await fetch(`https://shielded-peak-43727.herokuapp.com/etsy/shops/6127899/listings/active/?limit=8&offset=${offset}`)
		const items = await response.json();
		console.log(items)
		return items;
	}
	
	const makePageArray = function(itemArray) {
		let arr = [];
		for (let i = 0; i < Math.ceil(itemArray.count/8); i++) {
			arr.push(`${i*8}`)
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
		await setPageNum(Number(offset)/8+1)
		await setPageArray(makePageArray(allItems))
	}
	
	const [items, setItems] = useState({results: []});
	const [images, setImages] = useState([]);
	const [pageArray, setPageArray] = useState([]);
	const [pageNum, setPageNum] = useState(1);
	
	const containerStyle = {
		paddingTop: "1rem",
	}
	
	useEffect(() => {
		getData('0')
	}, []);
	
	return (
		<div>
			<Container style={containerStyle}>
			<Row>
 			{items && items.results.map((result) => (
 				<DisplayCard key={result.listing_id} itemInfo={result} imgSource={findImageObj(result.listing_id, images) ? findImageObj(result.listing_id, images).results[0].url_570xN : ''}/>
			))}
			</Row>
			<Row>
			<Col>
			<Pagination className="justify-content-center">
			{pageArray && pageArray.map((page) => (
				<Pagination.Item key={pageArray.indexOf(page)+1}
				active={pageArray.indexOf(page)+1 === pageNum}
				onClick={() => getData(page)}>
					{pageArray.indexOf(page)+1}
				</Pagination.Item>
			))}
			</Pagination>
 			</Col>
			</Row>
			</Container>
		</div>
	);
};

export default Shop;