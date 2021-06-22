import React, { useState } from "react"
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

const ItemDisplay = (props) => {
  let { listingID } = useParams();
  let itemData

  const [imageNumber, setImageNumber] = useState(0)

  const columnStyles = {
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  }

  const findData = function () {
    let arr = props.itemDataset.filter(element => element.id == listingID)
    itemData = arr[0]
  }

  findData();

  return (
    <Container style={{marginTop: '1rem'}}>
      <Row>
        <Col style={{marginBottom: '1rem'}} lg={12} xl={6}>
          <Row>
            <Col >
              <img
               src={itemData.imageData.results[imageNumber].url_570xN}
               alt={itemData.title}
               style={{width: '100%'}} />
            </Col>
          </Row>
          <Row style={{marginTop: '1rem'}}>
            {itemData.imageData.results.map((imgResult) => (
              <Col xs={4} sm={3} md={2} lg={2}>
                <img className="d-block w-100"
                  src={imgResult.url_570xN}
                  alt={itemData.title}
                  style={{
                    marginTop: '0.25rem',
                  }}
                  onClick={() => { setImageNumber(itemData.imageData.results.indexOf(imgResult)) }} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={12} xl={6}>
          <Row>
            <Col style={columnStyles}>
              <h1 style={{
                fontSize: '2rem',
                marginTop: 0,
              }} 
              dangerouslySetInnerHTML={{ __html: itemData.title }} />
              <Button style={{marginBottom: '1rem'}} id={listingID} onClick={props.addToCart}>Add to Cart</Button>
              <p>${itemData.price}</p>
              <h2 style={{fontSize: '1.75rem'}}>Description</h2>
              <p dangerouslySetInnerHTML={{ __html: itemData.description }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDisplay;