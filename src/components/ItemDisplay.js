import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

const ItemDisplay = (props) => {
	let { listingID } = useParams();
	console.log('hi')
	console.table(props)
	let itemData

	const textWrapperStyles = {
		marginTop: '4rem',
		marginBottom: '2rem',
	}

	const findData = function() {
		let arr = props.itemDataset.filter(element => element.id == listingID)
		itemData = arr[0]
	}
	findData();
	console.table(itemData)
	
	return (
    <Container>
      <h1 dangerouslySetInnerHTML={{ __html: itemData.title }} />
      <Carousel>
        {itemData.imageData.results.map((imgResult) => (
          <Carousel.Item>
            <img className="d-block w-100" src={imgResult.url_570xN} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Row>
        <Col style={textWrapperStyles} xs={{span: 12}} md={{span: 8, offset: 2}}>
          <p dangerouslySetInnerHTML={{ __html: itemData.description }} />
          <p>${itemData.price}</p>
		  <Button id={listingID} onClick={props.addToCart}>Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDisplay;