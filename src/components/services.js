import React, { Component } from "react";
import Readmore from './readmore.js'


export default class Services extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="service section" id="Services">
        <div className="container">
          <div className="section-head">
            <h2>Services</h2>
          </div>
          <div className="row">
            {data.edges.map((item, index) => {
              return (
                <div key={index} className="col-md-6 mb-3">
                  <div className="service-main">
                  
                    <h3>{item.node.title}</h3>
                    <Readmore shortcontent= {item.node.preview} longcontent= <div
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
      </div>
    );
  }
}

/*Copy all this and turn into a Functional component, using the React-Boostrap collapse thing*/