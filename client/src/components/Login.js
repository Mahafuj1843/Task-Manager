import React, { useRef, Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginRequest } from '../apiRequest/apiRequest.js'
import { ErrorToast, IsEmail, IsPassword } from '../helper/formHelper'

const Login = () => {

  let emailRef,passwordRef = useRef()
  let navigate = useNavigate();


  const onLogin = () =>{
    let email=emailRef.value;
    let password= passwordRef.value;

    if(IsEmail(email)){
      ErrorToast("Invalid email address.")
    }
    else if(IsPassword(password)){
        ErrorToast("Password must be six characters, at least one letter and one number !")
    }
    else{
      LoginRequest(email,password).then((result)=>{
        if(result)  window.location.href="/"
        else navigate('/Login')
      })
    }
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card shadow animated fadeIn w-100 p-3">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <br />
                <div className="col-md-12 p-2">
                      <label>Email</label>
                      <input ref={(input)=>emailRef=input} placeholder="Email" className="form-control animated fadeInUp" type="email" />
                    </div>
                <br />
                <div className="col-md-12 p-2">
                      <label>Password</label>
                      <input ref={(input)=>passwordRef=input} placeholder="Password" className="form-control animated fadeInUp" type="password" />
                    </div>
                <br />
                <div lassName="row mt-2 p-0">
                    <div className="col-md-12 p-2">
                      <button onClick={onLogin} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Complete</button>
                    </div>
                  </div>
                <hr />
                <div className="float-end mt-3">
                  <span className="col-md-12 p-2">
                    <Link className="text-center h6 animated fadeInUp" to="/ForgetPassword">Forget Password</Link>
                    <span className="mx-2">|</span>
                    <Link className="text-center h6 animated fadeInUp" to="/Registration">Sign Up </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login