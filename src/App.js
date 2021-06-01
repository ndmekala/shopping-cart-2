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
		const response = await fetch('https://shielded-peak-43727.herokuapp.com/etsy/shops/6127899/listings/active')
		// if error… try / catch…
		const items = await response.json();
		return items
	}
	
	const [items, setItems] = useState({results: []});
	
	useEffect(() => {
		pullItems().then(response => {
			setItems(response);
			console.log(response);
			})	
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
					</ul>
				</li>
			))}
 			</ul>
		</div>
	);
};

export default App;
