import React from 'react'
import "./contact.css"

function contactForm() {
  return (
<<<<<<< HEAD
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
=======
    <div>
                <form 
                     class="d-flex flex-lg-row flex-md-row flex-column justify-content-center align-items-center flex-wrap"> 
                     <div> 
                         <div class="blank"> 
                             <input type="text" required="required"> 
                             <span>FIRST NAME</span> 
                         </div> 
                     </div> 
  
                     <div> 
                         <div class="blank"> 
                             <input type="text" required="required"> 
                             <span>LAST NAME</span> 
                         </div> 
                     </div> 
  
                     <div> 
                         <div class="blank"> 
                             <input type="email" required="required"> 
                             <span>ENTER YOUR EMAIL</span> 
                         </div> 
                     </div> 
  
                     <div> 
                         <div class="blank"> 
                             <input type="text" required="required"> 
                             <span>ENTER YOUR NUMBER</span> 
                         </div> 
                     </div> 
  
                     <div> 
                         <div class="blank"> 
                             <input type="text" required="required"> 
                             <span>ENTER ORGANIZATION</span> 
                         </div> 
                     </div> 
  
                     <div> 
                         <div class="blank"> 
                             <select> 
                                 <option value="" selected disabled>SELECT YOUR STATE</option> 
                                 <option value="Andhra Pradesh">Andhra Pradesh</option> 
                                 <option value="Arunachal Pradesh">Arunachal Pradesh</option> 
                                 <option value="Assam">Assam</option> 
                                 <option value="Bihar">Bihar</option> 
                                 <option value="Chhattisgarh">Chhattisgarh</option> 
                                 <option value="Goa">Goa</option> 
                                 <option value="Gujarat">Gujarat</option> 
                                 <option value="Haryana">Haryana</option> 
                                 <option value="Himachal Pradesh">Himachal Pradesh</option> 
                                 <option value="Jharkhand">Jharkhand</option> 
                                 <option value="Karnataka">Karnataka</option> 
                                 <option value="Kerala">Kerala</option> 
                                 <option value="Madhya Pradesh">Madhya Pradesh</option> 
                                 <option value="Maharashtra">Maharashtra</option> 
                                 <option value="Manipur">Manipur</option> 
                                 <option value="Meghalaya">Meghalaya</option> 
                                 <option value="Mizoram">Mizoram</option> 
                                 <option value="Nagaland">Nagaland</option> 
                                 <option value="Odisha">Odisha</option> 
                                 <option value="Punjab">Punjab</option> 
                                 <option value="Rajasthan">Rajasthan</option> 
                                 <option value="Sikkim">Sikkim</option> 
                                 <option value="Tamil Nadu">Tamil Nadu</option> 
                                 <option value="Telangana">Telangana</option> 
                                 <option value="Tripura">Tripura</option> 
                                 <option value="Uttar Pradesh">Uttar Pradesh</option> 
                                 <option value="Uttarakhand">Uttarakhand</option> 
                                 <option value="West Bengal">West Bengal</option> 
                             </select> 
                         </div> 
                     </div> 
  
                     <div> 
                         <div class="blank"> 
                             <input type="text" required="required"> 
                             <span>ENTER YOUR CITY</span> 
                         </div> 
                     </div> 
  
                     <div> 
                         <div class="blank"> 
                           nput type="text" autocomplete="postal-code" required="required"> 
                             <span>ENTER PINCODE</span> 
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
>>>>>>> 4c7f1606ee605094fc045977d04d73ff2897a7c6
  )
}

export default contactForm