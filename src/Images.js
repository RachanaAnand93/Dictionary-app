import React from "react";
import "./photos.css";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="container">
        <section className="image-part">
          <div className="row">
            {props.images.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} rel="noreferrer">
                    <img src={photo.src.landscape} className="photos" alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
