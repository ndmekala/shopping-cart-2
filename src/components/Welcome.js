import React, { useState, useEffect } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const CardLink = (props) => {

  const imageStyles = {
    position: 'absolute',
    height: '100%',
    top: '0',
  }

  const linkTextStyles = {
    position: 'absolute',
    top: '40%',
    right: '50%',
    transform: 'translateX(50%)',
    color: '#ffffff'
  }

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

  const defaultLinkOverlayStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgb(0, 0, 0, 0.8)',
    display: 'none',
  }

  const hoverLinkOverlayStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgb(0, 0, 0, 0.7)',
    display: 'block',
  }

  const [linkOverlayStyles, setLinkOverlayStyles] = useState(defaultLinkOverlayStyles)

  const hover = function () {
    setLinkOverlayStyles(hoverLinkOverlayStyles)
  }

  const removeHover = function () {
    setLinkOverlayStyles(defaultLinkOverlayStyles)
  }

  return (
    <div style={containerStyles}
      onMouseEnter={hover}
      onMouseLeave={removeHover}
      onClick={() => { window.location.href = props.href }}>
      <img style={imageStyles} alt="Cycling gear from Roadrunner Bags" src={props.source}/>
      <div style={linkOverlayStyles}>
        <div style={linkTextStyles}>{props.text}</div>
      </div>
    </div>
  )
}

const Welcome = () => {
  return (
    <div>
      <Jumbotron className="welcome-hero" fluid>
      </Jumbotron>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <CardLink href="/shop"
              text="Shop Now!"
              source="https://cdn.shopify.com/s/files/1/1384/6395/files/Road_Runner_Bags_Shop_USA_Made_1.jpg?v=1591294701" />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <CardLink href="https://github.com/ndmekala/shopping-cart-2"
              text="👨🏾‍💻 Repository ❗️"
              source="https://cdn.shopify.com/s/files/1/1384/6395/files/RRB_sold_here_grande.jpg?v=1543846166" />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <CardLink href="https://www.meka.la"
              text="👨🏾‍💻 Portfolio ❗️"
              source="https://cdn.shopify.com/s/files/1/1384/6395/files/Road_Runner_Bags_Postal_Run.jpg?v=1608224911" />
          </Col>
          <Col sm={12} md={6} lg={3}>
            <CardLink href="/shop"
              text="Shop Now!"
              source="https://cdn.shopify.com/s/files/1/1384/6395/products/KleanKanteen_RoadRunnerBikeBags_Cat_8_1200x.jpg?v=1620753837" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={4}>
            <CardLink href="/shop"
              text="Shop Now!"
              source="https://cdn.shopify.com/s/files/1/1384/6395/files/Littleton_Colorado_Jumbo_Jammer_d48f66f8-a22a-4232-9b7f-1249365cde4b_1200x.jpg?v=1608231853" />
          </Col>
          <Col sm={12} md={12} lg={4}>
            <CardLink href="/shop"
              text="Shop Now!"
              source="https://cdn.shopify.com/s/files/1/1384/6395/files/DSF6122_1000x.JPG?v=1547591408" />
          </Col>
          <Col sm={12} md={12} lg={4}>
            <CardLink href="/shop"
              text="Shop Now!"
              source="https://cdn.shopify.com/s/files/1/1384/6395/files/road_runner_bags_burrito_supreme_on_velo_orange_pass_hunter_half.jpg?v=1616777043" />
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default Welcome;