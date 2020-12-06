import React, { Component } from "react";
import Img from "gatsby-image";

export default function Banner ({data}) {
  
    return (
      <div className="banner" id="invis">
        <Img
          fixed={data.bannerImage.fluid}
          objectFit="cover"
          objectPosition="50% 50%"

        />
        <div className="container">
          <div className="banner-details">
            
            <h1>{data.welcome}</h1>
            <h2 id="slogan">The Future is Built on a Solid Foundation</h2>
            
            <ul className="sub-data">
              {data.bannerList.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  
}
