import React, { Component } from "react";
import Header from './about.js' ;
import Img from "gatsby-image";

export default class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact Us</h2>
          </div>
  <ul className="details">
              <li>
                <strong>Phone</strong>
                <p>(604) 704 8019</p>
              </li>
              <li>
                <strong>Fax</strong>
                <p>(604) 298 8014</p>
              </li>
              <li>
                <strong>Address</strong>
                <p>{data.location}</p>
              </li>
              <li>
                <strong>Email</strong>
                <p>
                  <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
                </p>
              </li>
            </ul>

          <form
            action={`https://formspree.io/${this.props.data}`}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div>
              <label>
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Your Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Message: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      
      
      </React.Fragment>
    );
  }
}
