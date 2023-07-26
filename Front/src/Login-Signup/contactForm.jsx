import React from 'react'
import "./contact.css"

function contactForm() {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h1 >Contact Us</h1>
        <h4>Any question or remarks? Just write us a message!</h4>
      </div>
      <div className='contact-main'>

        <div className="contact-social-media">
          <div className="social-heading">
          <h1 className="">Contact Information</h1>
          <h6 className="">Fill up the form and our team will get back to you within 24hours.</h6>
          </div>
          <ul class="contact-list">
            <li class="d-flex align-item-center p-3"><i class="fa-solid fa-phone"></i><p>+91-7033668173</p></li>
            <li class="d-flex align-item-center p-3"><i class="fa-solid fa-envelope"></i><p>resumify@gmail.com</p></li>
            <li class="d-flex align-item-center p-3"><i class="fa-sharp fa-solid fa-location-dot"></i><p>Amar nagar C jaipur india</p></li>
          </ul>
          <div className="social">
            <ul >
              <li><a href="https://github.com/70gaurav"> <i class="fa-brands fa-github" aria-hidden="true"></i> </a> </li>
              <li><a href="#"> <i class="fa-brands fa-twitter" aria-hidden="true"></i> </a> </li>
              <li><a href="https://www.linkedin.com/in/gaurav-kumar-webdev/"> <i class="fa-brands fa-linkedin" aria-hidden="true"></i> </a> </li>
              <li><a href="#"> <i class="fa-brands fa-instagram" aria-hidden="true"></i> </a> </li>
            </ul>
          </div>
        </div>


        <div className='contact-form'>
          <form
            className="">
            <div className='blank-parent'>
              <div>
                <div className="blank">
                  <input type="text" required="required" />
                  <span>FIRST NAME</span>
                </div>
              </div>

              <div>
                <div className="blank">
                  <input type="text" required="required" />
                  <span>LAST NAME</span>
                </div>
              </div>
            </div>

            <div className="blank-parent">

              <div>
                <div className="blank">
                  <input type="email" required="required" />
                  <span>ENTER YOUR EMAIL</span>
                </div>
              </div>

              <div>
                <div className="blank">
                  <input type="text" required="required" pattern='[7-9]{1}[0-9]{9}' title='10 digit phone number with 7-9 at the beginning' />
                  <span>ENTER YOUR NUMBER</span>
                </div>
              </div>

            </div>



            <div className="blank-parent">
              <div>
                <div className="blank">
                  <input type="text" required="required" />
                  <span>ENTER YOUR CITY</span>
                </div>
              </div>

              <div>
                <div className="blank">
                  <input type="text" autocomplete="postal-code" required="required" />
                  <span>ENTER PINCODE</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="blank last">
                <textarea name="" id="" cols="60" rows="10" required></textarea>
                <span>MESSAGE</span>
              </div>

              <button className="text-center " type="submit"> Submit</button>
            </div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default contactForm
