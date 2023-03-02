import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegistrationRequest } from '../apiRequest/apiRequest.js'
import { ErrorToast, IsEmail, IsEmpty, IsPassword } from '../helper/formHelper'

const Register = () => {

  let fullnameRef,usernameRef,emailRef,passwordRef = useRef()
  let navigate = useNavigate();


  const onRegistration = () =>{
    let fullname=fullnameRef.value;
    let username=usernameRef.value;
    let email=emailRef.value;
    let password= passwordRef.value;

    if(IsEmpty(fullname)){
      ErrorToast("Fullname required !")
    }
    else if(IsEmpty(username)){
      ErrorToast("Username Required !")
    }
    else if(IsEmail(email)){
      ErrorToast("Invalid email address.")
    }
    else if(IsPassword(password)){
        ErrorToast("Password must be six characters, at least one letter and one number !")
    }
    else{
      RegistrationRequest(fullname,username,email,password).then((result)=>{
        if(result) navigate('/')
        else navigate('/Login')
      })
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card shadow animated fadeIn w-100 p-3">
              <div className="card-body">
                <h5 className='text-center'>Sign Up</h5>
                <hr />
                <div className="m-0 p-0">
                  <div className="row m-0 p-0">
                    <div className="col-md-12 p-2">
                      <label>Fullname</label>
                      <input ref={(input)=>fullnameRef=input} placeholder="FullName" className="form-control animated fadeInUp" type="text" />
                    </div><br />
                    <div className="col-md-12 p-2">
                      <label>Username</label>
                      <input ref={(input)=>usernameRef=input} placeholder="Username" className="form-control animated fadeInUp" type="text" />
                    </div><br />
                    <div className="col-md-12 p-2">
                      <label>Email</label>
                      <input ref={(input)=>emailRef=input} placeholder="Email" className="form-control animated fadeInUp" type="email" />
                    </div><br />
                    <div className="col-md-12 p-2">
                      <label>Password</label>
                      <input ref={(input)=>passwordRef=input} placeholder="Password" className="form-control animated fadeInUp" type="password" />
                    </div><br />

                  </div>
                  <div lassName="row mt-2 p-0">
                    <div className="col-md-12 p-2">
                      <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
                    </div>
                  </div>
                  <div className="float-end mt-3">

                  <span className="col-md-12 p-2">
                    <Link className="text-center ms-3 h6 animated fadeInUp" to="/Login">Sign In</Link>
                  </span>

                </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register