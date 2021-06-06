import React, { useState, useEffect } from "react"
import Col from 'react-bootstrap/Col'

const DisplayCard = (props) => {
	
	const imageWrapper = {
		width: '100%',
	}
	
	const imageStyle = {
		width: '100%',
		height: '0px',
		paddingBottom: '75%',
		backgroundImage: `url('${props.imgSource}')`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	}
	
	return (
	<Col sm={12} md={6} lg={4}>
		<div style={imageWrapper}>
			<div style={imageStyle}>
			</div>
		</div>
		<h3>{props.itemInfo.title}</h3>
		<p>${props.itemInfo.price}</p>
	</Col>
	);
}

export default DisplayCard;