import React, { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard.js";
import ItemDisplay from "./ItemDisplay.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";

const Shop = (props) => {
  let { path, url } = useRouteMatch();
  const findImageObj = function (id, array) {
    let arr = array.filter(
      (element) => Number(element.params.listing_id) === Number(id)
    );
    return arr[0];
  };

  const containerStyle = {
    paddingTop: "1rem",
  };

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Container style={containerStyle}>
			  <Row>
				  {props.itemDataset[props.currentPage - 1] &&
				  props.itemDataset[props.currentPage-1].map((item) => (
					  <DisplayCard
					  key={item.id}
					  itemData={item} />
				  ))}
			  </Row>
            {/* <Row>
              {props.itemData[props.currentPage - 1] &&
                props.imageData[props.currentPage - 1] &&
                props.itemData[props.currentPage - 1].results.map((result) => (
                  <div>
                    <DisplayCard
                      key={result.listing_id}
                      itemInfo={result}
                      imgSource={
                        findImageObj(
                          result.listing_id,
                          props.imageData[props.currentPage - 1]
                        ).results[0].url_570xN
                      }
                    />
                    <Link to={`${url}/${result.listing_id}`}>Link</Link>
                  </div>
                ))}
            </Row> */}
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
          <Container>
            <ItemDisplay
              itemData={props.itemData[props.currentPage - 1]}
              imageData={props.imageData[props.currentPage - 1]}
            />
          </Container>
        </Route>
      </Switch>
    </div>
  );
};

export default Shop;
