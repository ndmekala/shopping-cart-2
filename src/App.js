import React from "react";
import Nav from './components/Nav.js'

const App = () => {
	fetch('https://shielded-peak-43727.herokuapp.com/weather/?q=minneapolis')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(error => console.log(error))
	
	fetch('https://shielded-peak-43727.herokuapp.com/etsy/shops/6127899/listings/active')
	.then(response => response.json())
	.then(json => console.log(json))
	.catch(error => console.log(error))
	
	return (
		<div>
			<Nav />
			<h1>Hello from App</h1>
		</div>
	);
};

export default App;
