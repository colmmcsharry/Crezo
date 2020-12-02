import { Link } from "gatsby";
import React, { Component } from "react";
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };

     

  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };



  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo" onClick={this.scrollToTop}>
              
                {data.logo.file.url ? (
                  <img src={data.logo.file.url} alt="logo" />
                ) : (
                  <span>{data.siteName}</span>
                )}
              
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
            {header === "home" ? (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <a onClick={this.scrollToTop}>Home</a>
                  </li>
                  {data.menus
                    .filter(item => item === "About")
                    .map(t => {
                      return (
                        <li>
                          <Link href={`/#About`}>About</Link>
                        </li>
                      );
                    })}

                  {data.menus
                    .filter(item => item === "Services")
                    .map(t => {
                      return (
                        <li>
                          <Link href={`/#Services`}>Services</Link>
                        </li>
                      );
                    })}

                  {data.menus
                    .filter(item => item === "Projects")
                    .map(t => {
                      return (
                        <li>
                          <Link href={`/#Projects`}>Projects</Link>
                        </li>
                      );
                    })}

            
                  {data.menus
                    .filter(item => item === "Testimonials")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Testimonials`}>Testimonials</Link>
                        </li>
                      );
                    })}

                  {data.menus
                    .filter(item => item === "Photos")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Photos`}>Fotos</Link>
                        </li>
                      );
                    })}
                    
                  {data.menus
                    .filter(item => item === "Contact")
                    .map(t => {
                      return (
                        <li>
                          <Link to={`/#Contact`}>Contact</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ) : (
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li>
                    <Link to="/#home">Home</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "Projects")
                    .map(t => {
                      return (
                        <li>
                          <Link to="/projects">Projects</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Photos")
                    .map(t => {
                      return (
                        <li>
                          <Link to="/photos">Photos</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}
