import React, { useState, useEffect } from "react";
import Shop from "./components/Shop.js";
import Welcome from "./components/Welcome.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const App = () => {
  const pullShopItems = async function (pageNumber) {
    //needs error handling
    let response = await fetch(
      `https://shielded-peak-43727.herokuapp.com/etsy/shops/6127899/listings/active/?limit=8&offset=${
        (pageNumber - 1) * 8
      }`
    );
    const shopItems = await response.json();
    return shopItems;
  };

  const pullItemImages = async function (itemID) {
    // needs error handling
    const response = await fetch(
      `https://shielded-peak-43727.herokuapp.com/etsy/listings/${itemID}/images`
    );
    const itemImages = await response.json();
    return itemImages;
  };

  const lengthToArray = function (num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(i);
    }
    return arr;
  };

  // I’m not huge on allImageData…

  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // DONT THINK I NEED YOU NO MORE
  const [allItemData, setAllItemData] = useState([]);
  const [allImageData, setAllImageData] = useState([]);

  // NEED U THO
  const [itemDataset, setItemDataset] = useState([]);

  // DONT THINK I NEED YOU NO MORE
  const storePageData = async function (pageNumber) {
    const pageItemData = await pullShopItems(pageNumber);
    if (!pageCount) {
      await setPageCount(Math.ceil(pageItemData.count / 8));
    }
    let pageImageData = [];
    for (const result of pageItemData.results) {
      const imageData = await pullItemImages(result.listing_id);
      await pageImageData.push(imageData);
    }
    let stateCopyItemData = allItemData;
    let stateCopyImageData = allImageData;
    stateCopyItemData[pageNumber - 1] = await pageItemData;
    stateCopyImageData[pageNumber - 1] = await pageImageData;
    await setAllItemData([...stateCopyItemData]);
    await setAllImageData([...stateCopyImageData]);
  };

  // try this instead… 1) no need to worry about item state being “done” before image state
  // 2) easier access to data
  // 3) easier to (eventually) store globally to avoid passing down to props…

  const newStorePageData = async function (pageNumber) {
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
    newStorePageData(currentPage);
  }, [currentPage]);

  const setPage = function (e) {
    setCurrentPage(Number(e.target.id));
  };

  return (
    <BrowserRouter>
      <Navbar bg="light" sticky="top" variant="light">
        <Link className="navbar-brand" to="/">
          <img src="https://cdn.shopify.com/s/files/1/1384/6395/files/RRB_Logo_HMILA_2010_web_x100.png?v=1558565941" />
        </Link>
        <Nav>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </Nav>
      </Navbar>
      {/* <h1>itemDataset</h1>
	  <pre>{JSON.stringify(itemDataset, null, 2)}</pre>
      <h1>pageCount</h1>
      <pre>{JSON.stringify(pageCount, null, 2)}</pre>
      <h1>currentPage</h1>
      <pre>{JSON.stringify(currentPage, null, 2)}</pre> */}
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/shop">
          <Shop
            currentPage={currentPage}
            setPage={setPage}
            pageCount={lengthToArray(pageCount)}
			itemDataset={itemDataset}
            itemData={allItemData}
            imageData={allImageData}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
