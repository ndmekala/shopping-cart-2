import React, { useState, useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const containerStyles = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  height: '0',
  paddingTop: '100%',
  width: '100%',
  overflow: 'hidden',
  marginBottom: '1rem',
  cursor: 'pointer',
}

const imageStyles = {
  position: 'absolute',
  height: '100%',
  top: '0',
}

const linkBoxStyles = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'black',
  display: 'none',
}

const buttonStyles = {
  position: 'absolute',

}



const Welcome = () => {
		return (
      <div>
        <Jumbotron className="welcome-hero" fluid>
        </Jumbotron>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <div onClick={() => {window.location.href = '/shop'}} style={containerStyles}>
                <img style={imageStyles} src="https://cdn.shopify.com/s/files/1/1384/6395/files/Road_Runner_Bags_Shop_USA_Made_1.jpg?v=1591294701" />
                <div style={linkBoxStyles}><Button style={buttonStyles}>Shop Now</Button></div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div style={containerStyles}>
              <img style={imageStyles} src="https://cdn.shopify.com/s/files/1/1384/6395/files/RRB_sold_here_grande.jpg?v=1543846166" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
            <div style={containerStyles}>
              <img style={imageStyles} src="https://cdn.shopify.com/s/files/1/1384/6395/files/Road_Runner_Bags_Postal_Run.jpg?v=1608224911" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={3}>
            <div style={containerStyles}>
              <img style={imageStyles} src="https://cdn.shopify.com/s/files/1/1384/6395/products/KleanKanteen_RoadRunnerBikeBags_Cat_8_1200x.jpg?v=1620753837" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
            <div style={containerStyles}>
              <img style={imageStyles} src="https://cdn.shopify.com/s/files/1/1384/6395/files/Littleton_Colorado_Jumbo_Jammer_d48f66f8-a22a-4232-9b7f-1249365cde4b_1200x.jpg?v=1608231853" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
            <div style={containerStyles}>
              <img style={imageStyles} src="https://cdn.shopify.com/s/files/1/1384/6395/files/DSF6122_1000x.JPG?v=1547591408" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={3}>
            <div style={containerStyles}>
              <img style={imageStyles} src="https://cdn.shopify.com/s/files/1/1384/6395/files/road_runner_bags_burrito_supreme_on_velo_orange_pass_hunter_half.jpg?v=1616777043" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
    );
};

export default Welcome;