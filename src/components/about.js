import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Img from "gatsby-image";










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

    <div id="aboutgridwrap">
            <div className="abouttext"
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html
              }}


            />
            <div id="sketch">
            <Img
          fixed={data.aboutimg.fixed}
          objectFit="contain"
           className="sketchimg"
           
          loading="eager"

        />
            </div>

            </div>
            <div className="socials">
              <ul>
                <li>
                
                  <a
                    aria-label="Facebook symbol"
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  ><FontAwesomeIcon icon={faFacebookF} className='icons' /></a>
                </li>
                
                
                <li>
                  <a
                    aria-label="Linkedin symbol"
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  ><FontAwesomeIcon icon={faLinkedinIn} className="icons" /></a>
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
