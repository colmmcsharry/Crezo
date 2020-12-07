import React from "react";

const Header = ({ data }) => (
  
  <div className="about section" id="About">
    <div className="container">
      <div className="about-main row">
        
        <div className="centre col-md-7 col-lg-8">
          <div className="about-details">
            
            <h2 className="sub-position">
              About Us
            </h2>
            
            <h2 id="help">
              We can help <span className="build">build</span> your project
            </h2>
            
            <div
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html
              }}
            />
            
            <div className="socials">
              <ul>
                <li>
                  jnkj
                </li>
                
                
                <li>
                  blah
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Header;
