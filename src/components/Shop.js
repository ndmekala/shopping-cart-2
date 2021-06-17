import React, { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard.js";
import ItemDisplay from "./ItemDisplay.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button"
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Shop = (props) => {
  let { path, url } = useRouteMatch();

  const containerStyle = {
    paddingTop: "1rem",
  };

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Container style={containerStyle}>
            <h1>All Items</h1>
            <Row>
              {props.itemDataset[props.currentPage - 1] &&
                props.itemDataset[props.currentPage - 1].map((item) => (
                  <Col sm={12} md={6} lg={4}>
                    <DisplayCard key={item.id} itemData={item} />
                    <p>
                      <Link to={`${url}/${item.id}`}>
                        <Button>Check it out!</Button>
                      </Link>
                      <Button id={item.id} onClick={props.addToCart}>
                        Add to Cart
                      </Button>
                    </p>
                  </Col>
                ))}
            </Row>
            <Row>
              <Col>
                <Pagination className="justify-content-center">
                  {props.pageCount &&
                    props.pageCount.map((page) => (
                      <Pagination.Item
                        key={page + 1}
                        id={page + 1}
                        active={page + 1 === props.currentPage}
                        onClick={props.setPage}
                      >
                        {page + 1}
                      </Pagination.Item>
                    ))}
                </Pagination>
              </Col>
            </Row>
          </Container>
        </Route>
        <Route path={`${path}/:listingID`}>
          <ItemDisplay
            addToCart={props.addToCart}
            itemDataset={props.itemDataset[props.currentPage - 1]}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Shop;
