import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Cart = (props) => {

  const findItemObject = function (id) {
    let arr = [];
    let i = 0;
    while (!arr[0]) {
      arr = props.itemDataset[i].filter((element) => element.id == id)
      i++;
    }
    return arr;
  };

  const countItem = function (id) {
    let arr = props.shoppingCart.filter((element) => element == id);
    return arr.length;
  };

  const removeDuplicates = function (array) {
    let arr = [];
    array.forEach((element) => {
      if (!arr.includes(element)) {
        arr.push(element);
      }
    });
    arr.sort();
    return arr;
  };

  const calculateTotal = function (array) {
    let sum = 0
    array.forEach((element) => {
      sum += Number(findItemObject(element)[0].price)
    })
    return sum
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          {removeDuplicates(props.shoppingCart).map((itemID) => (
            <Row>
              <Col sm={12} md={4}>
                <img style={{ width: '100%' }} src={findItemObject(itemID)[0].imageData.results[0].url_570xN} />
              </Col>
              <Col sm={12} md={8}>
                <p dangerouslySetInnerHTML={{ __html: findItemObject(itemID)[0].title }}></p>
                <p>{findItemObject(itemID)[0].price}</p>
                <p>Quantity: <Button id={itemID + "-reduceQuantity"} onClick={props.reduceQuantity}>-</Button>
                  {countItem(itemID)}
                  <Button id={itemID} onClick={props.addToCart}>+</Button></p>
                <p><Button id={itemID + "-remove"} onClick={props.remove}>Remove</Button></p>
              </Col>
            </Row>
          ))}
        </Col>
        <Col xs={12} md={4}>
          <h1>Subtotal: ${calculateTotal(props.shoppingCart)}</h1>
          <Button style={{ width: '100%' }}>Proceed to Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

// <div>{findItemObject(itemID, props.itemDataset)[0].title}
// <ul>
// <li>{findItemObject(itemID, props.itemDataset)[0].i}</li>
// <li>{findItemObject(itemID, props.itemDataset)[0].price}</li>
// <li>Quantity: <Button id={itemID + "-reduceQuantity"} onClick={props.reduceQuantity}>-</Button>{countItem(itemID)}<Button id={itemID} onClick={props.addToCart}>+</Button></li>
// <li><Button id={itemID + "-remove"} onClick={props.remove}>Remove</Button></li>
// 🗑
// </ul>
// </div>  */}