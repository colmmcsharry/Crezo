import React from "react"
import graphql from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function Mycomp({ data }) {
  return (
    
        <div>
          {data.welcome}
        </div>
      
    
  )
}