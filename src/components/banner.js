import React, { Component } from "react";
import Img from "gatsby-image";

export default function Banner ({data}) {
  
    return (
      <div className="banner">
        <Img
          fixed={data.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="container">
          <div className="banner-details">
            
            <h1>{data.welcome}</h1>
            <h2 id="slogan">The future is built on a solid foundation</h2>
            
          </div>
        </div>
      </div>
    );
  
}
