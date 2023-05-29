import React, { Fragment, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ForgetPasswordRequest } from '../apiRequest/apiRequest'
import { ErrorToast, IsEmail } from '../helper/formHelper'
import logo from '../Assets/icons/task-list-svgrepo-com.svg'

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
      <div className="container vh-100">
        <div className="row justify-content-center h-100">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="row justify-content-center">
            <div className="text-center d-flex align-items-center gap-2 mb-3">
								<img src={logo} width={32} height={32} alt='logo'/>
								<h2 className="heading-section m-0">Taskify</h2>
							</div>
            </div>
            <div className="shadow-sm animated fadeIn w-100 p-3">
              <div className="d-flex flex-column align-items-center gap-3 px-2">
                <span className='text-start col-12'>
                  <h4 className='m-0 fw-bold mb-3'>Forgot your password?</h4>
                  <p className='m-0'>We get it, stuff happens. Just enter your email address below and we'll send you a mail to reset your password</p>
                </span>
                <div className="col-12 text-start gap-1">
                  <lable className='fw-normal'>Email</lable>
                  <input ref={(input)=>emailRef=input} placeholder="company@mail.com" className="form-control animated fadeInUp mt-1 fw-light" type="email" />
                </div>
                <div className="col-12">
                  <button onClick={forgetPassword} className="btn w-100 float-end btn-primary animated fadeInUp">Sent password reset mail</button>
                </div>
                <div className="col-12 d-flex justify-content-start">
                  <span>Don't have account yet?</span>&nbsp;
                  <Link className='logo links' to="/Registration">Sign Up</Link>
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