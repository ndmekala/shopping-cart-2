import React, { useState, useEffect } from "react";
import Shop from './components/Shop.js'
import Welcome from './components/Welcome.js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const App = () => {
	
	
	return (
		<BrowserRouter>
			<Navbar bg="light" sticky="top" variant="light">
			<Link className="navbar-brand" to="/"><img src="https://cdn.shopify.com/s/files/1/1384/6395/files/RRB_Logo_HMILA_2010_web_x100.png?v=1558565941"/></Link>
			<Nav>
				<Link className="nav-link" to="/">Home</Link>
				<Link className="nav-link" to="/shop">Shop</Link>
			</Nav>
			</Navbar>
			<Switch>
				<Route exact path="/" component={Welcome} />
				<Route exact path="/shop" component={Shop} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
