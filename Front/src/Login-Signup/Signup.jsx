import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { nameHandler , emailHandler ,passwordHandler } from '../Features/signupSlice'
import axios from "axios"




function Signup() {

    const { username , email, password } = useSelector(state => state.signup)
    const dispatch = useDispatch()
    const navigate = useNavigate()

   function submitHandler (e) {
    e.preventDefault()
    axios.post("http://localhost:3000/register", {
        username: username,
        email: email,
        password: password,
    })
        .then((response) => {
            if (response.data.error) {
                console.log(response.data.error)
                // alert("email already exist")
            }
            else {
                alert("Registered Sucessfully !")
            }
        })
   }

    return (
        <div className='signup'>
            <div className='form-main'>
                <form  onSubmit={submitHandler}>
                    <div>
                        <div className="blank">
                            <input type="text" required="required" value={username} onChange={(e) => dispatch(nameHandler(e.target.value))} />
                            <span>USERNAME</span>
                        </div>
                    </div>

                    <div>
                        <div className="blank">
                            <input type="email" required="required" value={email} onChange={(e) => dispatch(emailHandler(e.target.value))} />
                            <span>E-MAIL</span>
                        </div>
                    </div>

                    <div>
                        <div className="blank">
                            <input type="password" required="required" value={password} onChange={(e) => dispatch(passwordHandler(e.target.value))} />
                            <span>PASSWORD</span>
                        </div>
                    </div>

                    <button type='submit'>Register</button>

                </form>
            </div>

        </div>


    )
}

export default Signup