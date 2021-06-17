import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const DisplayCard = (props) => {
  const imageWrapperStyles = {
    width: "100%",
  };

  const imageStyleDefault = {
    width: "100%",
    height: "0px",
    paddingBottom: "75%",
    backgroundImage: `url('${props.itemData.imageData.results[0].url_570xN}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const imageStyleHover = {
    width: "100%",
    height: "0px",
    paddingBottom: "75%",
    backgroundImage: `url('${props.itemData.imageData.results[1].url_570xN}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  const buttonStyleDefault = {
    display: 'inline',
    top: '0px',
    color: 'pink',


  }

  const buttonStyleHover = {

  }

  const handleButton = function (e) {
    console.log('hi');
  }

  const stylez = {
    position: 'relative',
    top: '-100px',

  }


  const [imageStyle, setImageStyle] = useState(imageStyleDefault)
  const [buttonStyle, setButtonStyle] = useState(buttonStyleDefault)

  return (
    <div style={imageWrapperStyles} >
      <div style={imageStyle}
      onMouseEnter={() => {setImageStyle(imageStyleHover)}}
      onMouseLeave={() => {setImageStyle(imageStyleDefault)}}>
      </div>
      {/* <h4 dangerouslySetInnerHTML={{ __html: props.itemData.title }} /> */}
      {/* <p>${props.itemData.price}</p> */}
    </div>
  );
};

export default DisplayCard;