import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cart = (props) => {
	
	
	return (
    <Container>
      <Row>
        <Col xs={{span: 12}} md={{span: 8, offset: 2}}>
            <ul>
                {props.shoppingCart.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;