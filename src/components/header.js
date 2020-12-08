import { Link } from "gatsby";
import React, { Component } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Img from "gatsby-image";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };


// const str = window.location.pathname;



  }

 

  gohome = () => {
    scroll.scrollToTop();
  }


  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
          
            <div className="logo" onClick={this.gohome}>
              <Link to="/">
                {data.logo.file.url ? (
                  // <img src={data.logo.file.url} alt="logo" />
                  <Img fluid={data.logo.fluid} alt="logo" style={{maxWidth:'250px', maxHeight:'80px', padding:'0', margin:'0' }} loading="eager" />

                ) : (
                  <span>{data.siteName}</span>
                  
                )}
              </Link>
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
                    <a onClick={this.gohome}>Home</a>
                  </li>
                  {data.menus
                    .filter(item => item === "About")
                    .map(t => {
                      return (
                        <li>
                        <ScrollLink to="About" offset={-70} smooth={true} duration={500} onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}>
                          <span>About</span>
                          </ScrollLink>
                        </li>
                      );
                    })}


                   {data.menus
                    .filter(item => item === "Projects")
                    .map(t => {
                      return (
                        <li>
                          <ScrollLink to="Projects" offset={-70} smooth={true} duration={500} onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }} onKeyDown={() => {
                    this.setState({
                      menu: false
                    });
                  }} >
                          <span>Projects</span>
                          </ScrollLink>
                        </li>
                      );
                    })} 

                  {data.menus
                    .filter(item => item === "Services")
                    .map(t => {
                      return (
                        <li>
                        <ScrollLink to="Services" offset={-70} smooth={true} duration={500} onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}>
                          <span>Services</span>
                          
                        </ScrollLink>
                        </li>
                      );
                    })}


            
                  {data.menus
                    .filter(item => item === "Testimonials")
                    .map(t => {
                      return (
                        <li>
                          <ScrollLink to="Testimonials" offset={-70} smooth={true} duration={500} onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}>
                          <span>Testimonials</span>
                          </ScrollLink>
                        </li>
                      );
                    })}

                  
                    
                  {data.menus
                    .filter(item => item === "Contact")
                    .map(t => {
                      return (
                        <li>
                          <ScrollLink to="Contact" offset={-70} smooth={true} duration={500} onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}>
                          <span>Contact</span>
                          </ScrollLink>
                        </li>
                      );
                    })}

                    {data.menus
                    .filter(item => item === "Trades")
                    .map(t => {
                      return (
                        <li>
                          <ScrollLink to="Trades" offset={-70} smooth={true} duration={500} onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}>
                          <span>Trades</span>
                          </ScrollLink>
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
                 
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}
