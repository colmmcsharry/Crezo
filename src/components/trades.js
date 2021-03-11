import React, { useState } from "react";
import Collapse from 'react-bootstrap/Collapse';

export default function Trades()  {

const [open, setOpen] = useState(false);

    return (
      <React.Fragment>

      

      <div className="contact section " id="Trades">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Trades</h2> <br/><br/>
            <p>Thank you for your interest in working with us <br/> </p>
            <p>Please submit the following information</p>

            <button 
        onClick={() => setOpen(!open)}
        aria-controls="reveal"
        aria-expanded={open}
        className="reveal tradesbut"
      >
        Reveal Form  
      </button>
          </div>

          

<Collapse in={open}>

  <div className="myclass" id="reveal">

          <form method="post" name="tradesform" action={`https://formspree.io/f/xleowbpw`}>
            
            <div>
              <label>
                Your Name *: <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Your Email *: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                Company Name: <input type="text" name="company"  />
              </label>
            </div>
            <div>
              <label>
                Scope of Work *: <input type="text" name="scope-of-work" required />
              </label>
            </div>


            <div>
              <label>
                List of Recent Projects: <textarea name="list-of-projects" ></textarea>
              </label>
            </div>

            <div>
              <label>
                Subject *: <input type="text" name="subject" required />
              </label>
            </div>

            <div>
              <label>
                Message *: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">Send</button>
            </div>

          </form>

          </div>
          </Collapse>

        </div>
      </div>
      
      
      </React.Fragment>
    );
  
}
