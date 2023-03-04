import React, { Fragment, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ForgetPasswordRequest } from '../apiRequest/apiRequest'
import { ErrorToast, IsEmail } from '../helper/formHelper'

const ForgetPassword = () => {
  let emailRef = useRef()
  let navigate = useNavigate()

  const forgetPassword = () =>{
    let email = emailRef.value;

    if(IsEmail(email)){
        ErrorToast("Invalid email address.")
    }
    else{
      ForgetPasswordRequest(email).then((result)=>{
        if(result) navigate('/Login')
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
                <h4>Forget Password</h4>
                <br />
                <div className="col-md-12">
                  <label>Email</label>
                  <input ref={(input)=>emailRef=input} placeholder="Email" className="form-control animated fadeInUp" type="email" />
                </div>
                <br />
                <div lassName="row mt-2 p-0">
                  <div className="col-md-12">
                    <button onClick={forgetPassword} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Send</button>
                  </div>
                </div>
                <div className="float-end mt-1">
                  <span className="col-md-12">
                    <Link className="text-center ms-3 h6 animated fadeInUp" to="/Login">Sign In</Link>
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

export default ForgetPassword