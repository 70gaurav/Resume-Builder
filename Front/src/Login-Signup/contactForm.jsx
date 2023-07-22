import React from 'react'

function contactForm() {
  return (
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
  )
}

export default contactForm