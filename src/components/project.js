import React from "react";
import { Link,graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";
import Banner from "../components/banner";
import About from "../components/about";




function Project(props) { 

return(

<ul className="photos-page-list">

{props.lolphotosource.map((pic, index) => {
  return <li key={index} className="item"> <Img
                        fixed={pic.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"/>
  <span>{props.sourcename}</span>
   </li>
})}
     </ul>

)
}

export default Project;