import React, { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard.js";
import ItemDisplay from "./ItemDisplay.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
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

  const quickAddStyles = {
    width: '100%',
    margin: '5px 0',
  }

  const smallParaStyle = {
    fontSize: '0.875rem',
  }

  const itemInfoStyle = {
    height: '2rem',
    width: '100%',
    marginBottom: '1rem',
  }

  if (!props.itemDataset[props.currentPage - 1]) {
    return (
      <div>
        Loading!
      </div>
    )
  }

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Container style={containerStyle}>
            <Jumbotron className="shop-hero" fluid></Jumbotron>
            <h1>All Items</h1>
            <Row>
              {props.itemDataset[props.currentPage - 1] &&
                props.itemDataset[props.currentPage - 1].map((item) => (
                  <Col sm={12} md={6} lg={4}>
                    <Link to={`${url}/${item.id}`}>
                      <DisplayCard key={item.id} itemData={item} />
                    </Link>
                    <Button style={quickAddStyles} id={item.id} onClick={props.addToCart}>Quick Add</Button>
                    <div style={itemInfoStyle}>
                    <Link to={`${url}/${item.id}`}>
                    <p style={smallParaStyle} dangerouslySetInnerHTML={{ __html: `${item.title} | $${item.price}` }}></p>
                    </Link>
                    </div>
                    
                    {/* <p>
                      {item.title}
                      <Link to={`${url}/${item.id}`}>
                        <Button>Check it out!</Button>
                      </Link>
                      <Button id={item.id} onClick={props.addToCart}>
                        Add to Cart
                      </Button>
                    </p> */}
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
