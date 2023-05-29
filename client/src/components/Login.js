import React, { useRef, Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginRequest } from '../apiRequest/apiRequest.js'
import { ErrorToast, IsEmail, IsPassword } from '../helper/formHelper'
import logo from '../Assets/icons/task-list-svgrepo-com.svg'

const Login = () => {

  let emailRef, passwordRef = useRef()
  let navigate = useNavigate();


  const onLogin = () => {
    let email = emailRef.value;
    let password = passwordRef.value;

    if (IsEmail(email)) {
      ErrorToast("Invalid email address.")
    }
    else if (IsPassword(password)) {
      ErrorToast("Password must be six characters, at least one letter and one number !")
    }
    else {
      LoginRequest(email, password).then((result) => {
        if (result) window.location.href = "/"
        else navigate('/Login')
      })
    }
  }

  const onGuestLogin =async () =>{
		await LoginRequest("jhon@gmail.com", 'a12345').then((result) => {
			if (result) window.location.href = "/"
			else navigate('/Login')
		})
	}

  return (
    <Fragment>
      <div className="container vh-100">
        <div className="row justify-content-center h-100">
          <div className="col-md-7 col-lg-6 center-screen">
            <div class="row justify-content-center">
              <div className="text-center d-flex align-items-center gap-2 mb-3">
                <img src={logo} width={32} height={32} alt='logo' />
                <h2 className="heading-section m-0">Taskify</h2>
              </div>
            </div>
            <div className="shadow-sm animated fadeIn w-100 p-3">
              <div className="d-flex flex-column align-items-center gap-3 px-2">
                <span className='text-start col-12'>
                  <h4 className='m-0 fw-bold'>Sign In your account</h4>
                </span>
                <div className="col-12 text-start gap-1">
                  <lable className='fw-normal'>Email</lable>
                  <input ref={(input) => emailRef = input} placeholder="Email" className="form-control animated fadeInUp mt-1 fw-light" type="email" />
                </div>
                <div className="col-12 text-start gap-1">
                  <lable className='fw-normal'>Password</lable>
                  <input ref={(input) => passwordRef = input} placeholder="Password" className="form-control animated fadeInUp mt-1 fw-light" type="password" />
                </div>
                <div className='col-12 d-flex align-items-center justify-content-between'>
                  <div className='d-flex gap-2 align-items-center'>
                    <input type="checkbox" class="form-check" id="chb" required />
                    <label for="chb" class="form-check-label">Remember Me</label>
                  </div>
                  <Link className='logo links' to="/ForgetPassword">Forget Password?</Link>
                </div>
                <div className="col-12">
                  <button onClick={onLogin} className="btn w-100 float-end btn-primary animated fadeInUp">Sign In</button>
                </div>
                <div className="col-12 d-flex justify-content-start">
                  <span>Don't have account yet?</span>&nbsp;
                  <Link className='logo links' to="/Registration">Sign Up</Link>
                </div>
                <div className="col-12">
                  <button onClick={onGuestLogin} className="btn w-100 float-end btn-warning animated fadeInUp">Sign In as a guest</button>
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