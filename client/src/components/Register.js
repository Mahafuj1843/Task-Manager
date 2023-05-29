import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegistrationRequest } from '../apiRequest/apiRequest.js'
import { ErrorToast, IsEmail, IsEmpty, IsPassword } from '../helper/formHelper'
import logo from '../Assets/icons/task-list-svgrepo-com.svg'

const Register = () => {

  let fullnameRef, usernameRef, emailRef, passwordRef = useRef()
  let navigate = useNavigate();


  const onRegistration = () => {
    let fullname = fullnameRef.value;
    let username = usernameRef.value;
    let email = emailRef.value;
    let password = passwordRef.value;

    if (IsEmpty(fullname)) {
      ErrorToast("Fullname required !")
    }
    else if (IsEmpty(username)) {
      ErrorToast("Username Required !")
    }
    else if (IsEmail(email)) {
      ErrorToast("Invalid email address.")
    }
    else if (IsPassword(password)) {
      ErrorToast("Password must be six characters, at least one letter and one number !")
    }
    else {
      RegistrationRequest(fullname, username, email, password).then((result) => {
        if (result) navigate('/')
        else navigate('/Login')
      })
    }
  }

  return (
    <div className="container vh-100">
      <div className="row justify-content-center h-100">
        <div className="col-md-7 col-lg-6 center-screen">
          <div className="row justify-content-center">
            <div className="text-center d-flex align-items-center gap-2 mb-3">
              <img src={logo} width={32} height={32} alt='logo' />
              <h2 className="heading-section m-0">Taskify</h2>
            </div>
          </div>
          <div className="shadow-sm animated fadeIn w-100 p-3">
            <div className="d-flex flex-column align-items-center gap-3 px-2">
              <span className='text-start col-12'>
                <h4 className='m-0 fw-bold'>Create an account</h4>
              </span>
              <div className="col-12 text-start d-lg-flex justify-content-between gap-0 gap-lg-2">
                <div className='col-lg-6 col-12'>
                  <lable className='fw-normal'>Fullname</lable>
                  <input ref={(input) => fullnameRef = input} placeholder="e.g. Jhon Doe" className="form-control animated fadeInUp mt-1 fw-light" type="text" />
                </div>
                <div className='col-lg-6 col-12'>
                  <lable className='fw-normal'>Username</lable>
                  <input ref={(input) => usernameRef = input} placeholder="e.g. Jhon" className="form-control animated fadeInUp mt-1 fw-light" type="text" />
                </div>
              </div>
              <div className="col-12 text-start gap-1">
                <lable className='fw-normal'>Email</lable>
                <input ref={(input) => emailRef = input} placeholder="company@mail.com" className="form-control animated fadeInUp mt-1 fw-light" type="email" />
              </div>
              <div className="col-12 text-start gap-1">
                <lable className='fw-normal'>Password</lable>
                <input ref={(input) => passwordRef = input} placeholder="Password" className="fw-normal form-control animated fadeInUp mt-1 fw-light" type="password" />
              </div>
              <div className='col-12 d-flex align-items-center justify-content-between'>
                <div className='d-flex gap-2 align-items-center'>
                  <input type="checkbox" class="form-check" id="chb" required />
                  <label for="chb" class="form-check-label">Remember Me</label>
                </div>
              </div>
              <div className="col-12">
                <button onClick={onRegistration} className="btn w-100 float-end btn-primary animated fadeInUp">Sign Up</button>
              </div>
              <div className="col-12 d-flex justify-content-start">
                <span>Already have an account? </span>&nbsp;
                <Link to="/Login" className='logo links'>Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register