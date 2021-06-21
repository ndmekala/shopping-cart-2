import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

const ItemDisplay = (props) => {
  let { listingID } = useParams();
  console.log('hi')
  console.table(props)
  let itemData

  const [imageNumber, setImageNumber] = useState(0)

  const findData = function () {
    let arr = props.itemDataset.filter(element => element.id == listingID)
    itemData = arr[0]
  }
  findData();
  console.table(itemData)

  return (
    <Container style={{marginTop: '1rem'}}>
      <Row>
        <Col>
          <Row>
            <Col >
              <img src={itemData.imageData.results[imageNumber].url_570xN}></img>
            </Col>
          </Row>
          <Row style={{marginTop: '1rem'}}>
            {itemData.imageData.results.map((imgResult) => (
              <Col xs={4} sm={3} md={2} lg={2}>
                <img className="d-block w-100"
                  src={imgResult.url_570xN}
                  onClick={() => { setImageNumber(itemData.imageData.results.indexOf(imgResult)) }} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <h1 className="item-display-header" dangerouslySetInnerHTML={{ __html: itemData.title }} />
              <Button style={{marginBottom: '1rem'}} id={listingID} onClick={props.addToCart}>Add to Cart</Button>
              <p>${itemData.price}</p>
              <p dangerouslySetInnerHTML={{ __html: itemData.description }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDisplay;