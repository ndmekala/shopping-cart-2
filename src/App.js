import React, { useState, useEffect } from "react";
import Shop from "./components/Shop.js";
import Welcome from "./components/Welcome.js";
import Cart from "./components/Cart.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
  const pullShopItems = async function (pageNumber) {
    try {
      let response = await fetch(
        `https://sleepy-meadow-52233.herokuapp.com/roadrunnerlistings/?limit=8&offset=${(pageNumber - 1) * 8
        }`
      );
      const shopItems = await response.json();
      return shopItems;
    } catch (err) {
      console.log(err)
    }
  };

  const pullItemImages = async function (itemID) {
    try {
      const response = await fetch(
        `https://sleepy-meadow-52233.herokuapp.com/listings/${itemID}/images/`
      );
      const itemImages = await response.json();
      return itemImages;
    } catch (err) {
      console.log(err)
    }

  };

  const lengthToArray = function (num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  };

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemDataset, setItemDataset] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  const storePageData = async function (pageNumber) {
    if (!itemDataset[pageNumber - 1]) {
      const pageItemData = await pullShopItems(pageNumber);
      if (!pageCount) {
        await setPageCount(Math.ceil(pageItemData.count / 8));
      }
      let pageData = [];
      for (const result of pageItemData.results) {
        const imageData = await pullItemImages(result.listing_id);
        const id = result.listing_id;
        const title = result.title;
        const description = result.description;
        const price = result.price;
        const itemData = { id, title, description, price, imageData };
        pageData.push(itemData);
      }
      let stateCopy = itemDataset;
      stateCopy[pageNumber - 1] = await pageData;
      await setItemDataset([...stateCopy]);
    }
  };

  useEffect(() => {
    storePageData(currentPage);
  }, [currentPage]);

  const setPage = function (e) {
    setCurrentPage(Number(e.target.id));
  };

  const addToCart = function (e) {
    let stateCopy = shoppingCart;
    stateCopy.push(e.target.id);
    setShoppingCart([...stateCopy])
  }

  const reduceQuantity = function (e) {
    let id = e.target.id.replace("-reduceQuantity", "");
    if (shoppingCart.indexOf(id) !== shoppingCart.lastIndexOf(id)) {
      let stateCopy = shoppingCart
      stateCopy.splice(stateCopy.indexOf(id), 1)
      setShoppingCart([...stateCopy])
    }
  }

  const remove = function (e) {
    let id = e.target.id.replace("-remove", "");
    let stateCopy = shoppingCart.filter((element) => element !== id);
    console.log(stateCopy);
    setShoppingCart([...stateCopy]);
  }

  const cartCountStyles = {
    display: 'inline-block',
    position: 'relative',
    height: '1.5rem',
    width: '1.5rem',
    borderRadius: '2rem',
    top: '-1rem',
    backgroundColor: 'var(--popstar)',
    color: 'var(--pale-silver)',
    paddingTop: '0.25rem',
    paddingLeft: '0.5rem',
    fontSize: '0.75rem',
  }

  return (
    <HashRouter>
      <Navbar bg="light" sticky="top" variant="light">
        <Link className="navbar-brand" to="/">
          <img src="https://cdn.shopify.com/s/files/1/1384/6395/files/RRB_Logo_HMILA_2010_web_x100.png?v=1558565941" 
          alt="Roadrunner Bags logo"/>
        </Link>
        <Nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/cart">
            Cart <div style={cartCountStyles}>{shoppingCart.length}</div>
          </Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/shop">
          <Shop
            currentPage={currentPage}
            setPage={setPage}
            pageCount={lengthToArray(pageCount)}
            itemDataset={itemDataset}
            addToCart={addToCart}
          />
        </Route>
        <Route path="/cart">
          <Cart shoppingCart={shoppingCart}
            itemDataset={itemDataset}
            addToCart={addToCart}
            reduceQuantity={reduceQuantity}
            remove={remove} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
