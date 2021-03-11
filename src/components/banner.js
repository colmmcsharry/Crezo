import React from "react";
import Img from "gatsby-image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ctaj from '../images/ctaj.jpg'



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
           
           <ScrollLink to="Contact" offset={-70} smooth={true} duration={500}>


           <img src={ctaj} id="mycta"/>

           </ScrollLink>
          </div>

        </div>
         
      </div>
    );
  
}
