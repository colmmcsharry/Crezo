import React, { Component } from "react";
import Img from "gatsby-image";

export default class Photospage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePopup: false,
      selectedItem: 0
    };
  }

  render() {
    const { activePopup, selectedItem } = this.state;

    return (
      
        <React.Fragment>
          
            
             
            <ul className="photos-page-list">
              {this.props.lolphotosource.map((item, index) => {
                return (
                  <li key={index} className="item">
                    <div
                      className="inner"
                      role="pic"
                      onClick={() => {
                        this.setState({
                          activePopup: true,
                          selectedItem: index
                        });
                      }}
                    >
                      <Img
                        fluid={item.fluid} /*was fixed prop*/
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            {activePopup ? (
              <div className="rg-popup">
                <span
                  className="popup-layer"
                  onClick={() => {
                    this.setState({
                      activePopup: false
                    });
                  }}
                ></span>

                <div className="popup-inner">
                  <div className="closephoto"
                    role="button"                    onClick={() => {
                      this.setState({
                        activePopup: false
                      });
                    }}
                  >x</div>

                  <Img fluid={this.props.lolphotosource[selectedItem].fluid}
                        alt="popup-img" 
                      />
                  {/* <img
                    src={this.props.lolphotosource[selectedItem].file.url}
                    alt="popup-img"
                  />  */}
                </div>
              </div>
            ) : (
              ""
            )}


          
        </React.Fragment>
      
    );
  }
}
