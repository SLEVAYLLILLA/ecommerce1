import React, { useState, useEffect } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
// import { list } from './data.js';

//const Gallery = () => {
  //const [index, setIndex] = useState(0);
  //const [showMore, setShowMore] = useState(false);
  //const hasNext = index < list.length - 1;
 
  //function handleNextClick() {
  //  if (hasNext) {
   //   setIndex(index + 1);
    //} else {
    //  setIndex(0);
    //}
  //}


  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = list[index];
  return (
    <>
      <h2>
        <i>{sculpture.title} </i>
        by {sculpture.author}
      </h2>
      <h3>
        ({index + 1} of {list.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );




const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  
  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;