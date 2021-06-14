import React, { useState, useEffect } from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cart = (props) => {
  const findImageObject = function (id) {
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

  return (
    <Container>
      <Row>
        <Col xs={{ span: 12 }} md={{ span: 8, offset: 2 }}>
          <ul>
            {removeDuplicates(props.shoppingCart).map((itemID) => (
                <li>{findImageObject(itemID)[0].title}
                    <ul>
                    <li>{countItem(itemID)}</li>
                    <li>{findImageObject(itemID)[0].id}</li>
                    <li>{findImageObject(itemID)[0].price}</li>
                  </ul>
                </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;