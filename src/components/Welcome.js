import React, { useState, useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Welcome = () => {
		return (
      <div>
        <Jumbotron className="welcome-hero" fluid>
        </Jumbotron>
        <Container>
          <Row>
            <Col lg={4}>
            <img style={{width: '100%'}} src="https://cdn.shopify.com/s/files/1/1384/6395/files/Road_Runner_Bags_Shop_USA_Made_1.jpg?v=1591294701" />
            </Col>
            <Col lg={4}>
            <img style={{width: '100%'}} src="https://cdn.shopify.com/s/files/1/1384/6395/files/RRB_sold_here_grande.jpg?v=1543846166" />
            </Col>
            <Col lg={4}>
            <img style={{width: '100%'}} src="https://cdn.shopify.com/s/files/1/1384/6395/files/Road_Runner_Bags_Postal_Run.jpg?v=1608224911" />
            </Col>
          </Row>
        </Container>
      </div>
      
    );
};

export default Welcome;