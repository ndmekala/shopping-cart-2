import React, { useState, useEffect } from "react"

const DisplayCard = (props) => {
	return (
	<div>
		<img src={props.imgSource}/>
		Hi
	</div>
	);
}

export default DisplayCard;