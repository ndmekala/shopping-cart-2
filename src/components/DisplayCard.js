import React, { useState, useEffect } from "react"
import Col from 'react-bootstrap/Col'

const DisplayCard = (props) => {
	
	const imageWrapperStyles = {
		width: '100%',
	}
	
	const imageStyles = {
    width: "100%",
    height: "0px",
    paddingBottom: "75%",
    backgroundImage: `url('${props.itemData.imageData.results[0].url_570xN}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
	
	return (
	<Col sm={12} md={6} lg={4}>
		<div style={imageWrapperStyles}>
			<div style={imageStyles}>
			</div>
			<h4>{props.itemData.title}</h4>
			<p>{props.itemData.price}</p>
		</div>
	</Col>
	);
}

export default DisplayCard;