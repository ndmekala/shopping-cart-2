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
      arr = props.itemDataset[i].filter((element) => element.id == id);
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
        <Col xs={{ span: 12 }} md={{ span: 8, offset: 2 }}>
          <ul>
            {removeDuplicates(props.shoppingCart).map((itemID) => (
                <li>{findItemObject(itemID)[0].title}
                    <ul>
                    <li>{countItem(itemID)}</li>
                    <li>{findItemObject(itemID)[0].id}</li>
                    <li>{findItemObject(itemID)[0].price}</li>
                  </ul>
                </li>
            ))}
          </ul>
          <h1>Total: {calculateTotal(props.shoppingCart)}</h1>
          <Button>Checkout</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;