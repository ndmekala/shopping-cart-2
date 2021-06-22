import React from "react"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { globals } from "../scripts/globals.js"

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

  const paragraphStyles = {
    marginBottom: '0.125rem',
  }

  const cartRemoveButtonStyles = {
    position: 'absolute',
	  top: '0',
	  right: 'calc(var(--bs-gutter-x)/ 2)',
  }

  const cartQuantitySelectorStyles = {
    display: 'inline-block',
	  border: '1px solid var(--pale-silver)',
	  borderRadius: '0.25rem',
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={8}>
          {removeDuplicates(props.shoppingCart).map((itemID) => (
            <Row style={{ marginTop: '1rem' }}>
              <Col sm={12} md={6} lg={4}>
                <div style={{
                  width: '100%',
                  height: '0px',
                  paddingBottom: '75%',
                  backgroundImage: `url(${findItemObject(itemID)[0].imageData.results[0].url_570xN})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}></div>
              </Col>
              <Col className="cart-info" sm={12} md={6} lg={8}>
                <p style={paragraphStyles} dangerouslySetInnerHTML={{ __html: globals.shortenTitle(findItemObject(itemID)[0].title) }}></p>
                <p style={paragraphStyles}>${findItemObject(itemID)[0].price}</p>
                <p style={paragraphStyles}><div style={cartQuantitySelectorStyles}><Button variant="outline-primary" id={itemID + "-reduceQuantity"} onClick={props.reduceQuantity}>–</Button>
                  {countItem(itemID)}
                  <Button variant="outline-primary" id={itemID} onClick={props.addToCart}>＋</Button></div>
                  <Button variant="outline-primary" style={cartRemoveButtonStyles} id={itemID + "-remove"} onClick={props.remove}>X</Button></p>
              </Col>
            </Row>
          ))}
        </Col>
        <Col xs={12} md={4} lg={4}>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '2rem' }}>Subtotal: ${calculateTotal(props.shoppingCart)}</p>
            <Button style={{ width: '100%' }} onClick={() => { alert('Just a dummy link for now. Thanks for checking out my project! 😃') }}>Proceed to Checkout</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;