import React, { useState} from "react";

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

  const [imageStyle, setImageStyle] = useState(imageStyleDefault)

  const hover = function () {
    setImageStyle(imageStyleHover)
  }

  const removeHover = function () {
    setImageStyle(imageStyleDefault)
  }

  return (
    <div style={imageWrapperStyles} >
      <div style={imageStyle}
        onMouseEnter={hover}
        onMouseLeave={removeHover}>
      </div>
    </div>
  );
};

export default DisplayCard;