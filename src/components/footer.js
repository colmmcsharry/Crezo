import React, { Component } from "react";


export default class footer extends Component {
  render() {
  	const { data } = this.props;
    return (
      <div className="site-footer" id="footer">
      
        <div className="container">
          <span> <ul className="social">
              <li>
                <a
                  className="fab fa-facebook-f"
                  href="https://www.facebook.com/pages/category/Construction-Company/Crezo-Construction-Inc-279485136046387/"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              
              
              <li>
                <a
                  className="fab fa-linkedin-in"
                  href="https://www.linkedin.com/company/crezo-construction-inc"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>
              
            </ul></span>

         
        </div>
        </div>
    );
  }
}
