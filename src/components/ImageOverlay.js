import React from "react";

const ImageOverlay = ({ url }) => {
  return (
    <div className="view overlay">
      <img className="card-img-top" src={url} alt="Card image cap" />
      <a href="#!">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>
  );
};

export default ImageOverlay;
