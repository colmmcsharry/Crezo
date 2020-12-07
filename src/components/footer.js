import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



export default class footer extends Component {
  render() {
  	const { data } = this.props;
    return (
      <div className="site-footer" id="footer">
      
        <div className="container">
          <span> <ul className="social">
              <li>
                <a
                  href="https://www.facebook.com/pages/category/Construction-Company/Crezo-Construction-Inc-279485136046387/"
                  target="_blank"
                  rel="noopener noreferrer"
                > <FontAwesomeIcon icon={faFacebookF} /> </a>
              </li>
              
              
              <li>
                <a
                  
                  href="https://www.linkedin.com/company/crezo-construction-inc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              
            </ul></span>

         
        </div>
        </div>
    );
  }
}
