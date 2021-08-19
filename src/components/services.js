import React, { Component } from "react";
import Readmore from './readmore.js'
import { graphql } from "gatsby";
import BackgroundSection from './gatsbybg.js'



export default class Services extends Component {


  render(




    ) {
    const { data } = this.props;
    return (
      <React.Fragment>
 
      <div className="service section" id="Services"> <BackgroundSection/>
        <div className="container">
          <div className="section-head" id="servtitle">
            <h2 className="servh2">Services</h2>
          </div>
         </div>
          <div className="row servrow" id="parallax">
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-md-6 mb-3">
                  <div className="service-main">
                  
                    <h3>{item.node.title}</h3>
                    <img src={item.node.iconlink} className="servicons"/>
                    <Readmore shortcontent= {item.node.preview} longcontent= <div className="long"
                      dangerouslySetInnerHTML={{
                        __html: item.node.description.childMarkdownRemark.html
                      }}
                    />  />
                    
                  </div>
                </div>
              );
            })}
          </div>
          
         
        
      </div>
      </React.Fragment>
    );
  }
}

