import React from 'react'
import "./contact.css"

function contactForm() {
  return (
    <div className='contact-main'>
      <div class="contact-social-media">
        <h1 class="text-center pt-2 pb-2" >Contact Us</h1>
        <h4 class="text-center pt-2 pb-5">Any question or remarks? Just write us a message!</h4>
        <div class="bg-white rounded p-5">
          <div class="row  flex-lg-row  flex-column-reverse ">
            <div class="contact col-lg-4  ms-5 col-md-12 justify-content-center align-item-center col-12  rounded">
              <h1 class="m-3">Contact Information</h1>
              <h6 class="m-3">Fill up the form and our team will get back to you within 24hours.</h6>
              <ul class="contact-list mt-5">
                <li class="d-flex align-item-center p-3"><i class="fa-solid fa-phone"></i><p>+91-0987654321</p></li>
                <li class="d-flex align-item-center p-3"><i class="fa-solid fa-envelope"></i><p>sportscub@gmail.com</p></li>
                <li class="d-flex align-item-center p-3"><i class="fa-sharp fa-solid fa-location-dot"></i><p>gopalpura jaipur india</p></li>
              </ul>
              <div class="social mt-5">
                <ul >
                  <li><a href="#"> <i class="fa-brands fa-facebook-f" aria-hidden="true"></i> </a> </li>
                  <li><a href="#"> <i class="fa-brands fa-twitter" aria-hidden="true"></i> </a> </li>
                  <li><a href="#"> <i class="fa-brands fa-linkedin" aria-hidden="true"></i> </a> </li>
                  <li><a href="#"> <i class="fa-brands fa-instagram" aria-hidden="true"></i> </a> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='contact-form'>
        <form
          class="d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center flex-wrap">
         <div className='blank-parent'>
         <div>
            <div class="blank">
              <input type="text" required="required" />
              <span>FIRST NAME</span>
            </div>
          </div>

          <div>
            <div class="blank">
              <input type="text" required="required" />
              <span>LAST NAME</span>
            </div>
          </div>
         </div>

          <div className="blank-parent">
            
          <div>
            <div class="blank">
              <input type="email" required="required" />
              <span>ENTER YOUR EMAIL</span>
            </div>
          </div>

          <div>
            <div class="blank">
              <input type="text" required="required" />
              <span>ENTER YOUR NUMBER</span>
            </div>
          </div>

          </div>

         

         <div className="blank-parent">
         <div>
            <div class="blank">
              <input type="text" required="required" />
              <span>ENTER YOUR CITY</span>
            </div>
          </div>

          <div>
            <div class="blank">
              <input type="text" autocomplete="postal-code" required="required" />
              <span>ENTER PINCODE</span>
            </div>
          </div>
         </div>

          <div class="text-center">
            <div class="blank last">
              <textarea name="" id="" cols="60" rows="10" required></textarea>
              <span>MESSAGE</span>
            </div>

            <button class="text-center " type="submit"> Submit</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default contactForm