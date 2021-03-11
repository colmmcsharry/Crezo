import React from "react";
import Img from "gatsby-image";
import touch from '../images/touch.png'


export default function Banner ({data}) {
  
    return (
      <div className="banner">
        <Img
          fluid={data.bannerImage.fluid} /*was fixed prop*/
          objectFit="cover"
          objectPosition="50% 50%"
          loading="eager"

        />
        <div className="container">
          <div className="banner-details">
            
            <h1>{data.welcome}</h1>
            <h2 id="slogan">The Future is Built on a Solid Foundation</h2>
            
            <ul className="sub-data">
              {data.bannerList.map((item, index) => {
                return <React.Fragment>

                 <li key={index}>{item}  </li>
                
                </React.Fragment>; 
              })} 

              
            </ul>
           {/* <button id="cta">Get in Touch!</button>*/}
           
          </div>

        </div>
         <img src={touch} id="sign"/>
      </div>
    );
  
}
