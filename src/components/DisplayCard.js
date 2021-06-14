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
		<div style={imageWrapperStyles}>
			<div style={imageStyles}>
			</div>
			<h4 dangerouslySetInnerHTML={{__html: props.itemData.title}}/>
			<p>{props.itemData.price}</p>
		</div>
	);
}

export default DisplayCard;