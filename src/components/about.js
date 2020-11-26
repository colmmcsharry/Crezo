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
            <div
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html
              }}
            />
            
            <div className="socials">
              <ul>
                <li>
                  <a
                    className="fab fa-facebook-f"
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                
                
                <li>
                  <a
                    className="fab fa-linkedin-in"
                    href={data.linkdin}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
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
