import React, { Fragment, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ResetPasswordRequest } from '../apiRequest/apiRequest'
import { ErrorToast, IsPassword } from '../helper/formHelper'

const ResetPassword = () => {
  let passwordRef = useRef()
  let navigate = useNavigate()
  let params = useParams()

  const resetPassword = () =>{
    let password = passwordRef.value;

    if(IsPassword(password)){
        ErrorToast("Password must be six characters, at least one letter and one number !")
    }
    else{
      ResetPasswordRequest(password, params.token).then((result)=>{
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
                <h4>Reset Password</h4>
                <br />
                <div className="col-md-12">
                  <label>Password</label>
                  <input ref={(input)=>passwordRef=input} placeholder="Password" className="form-control animated fadeInUp" type="password" />
                </div>
                <br />
                <div lassName="row mt-2 p-0">
                  <div className="col-md-12">
                    <button onClick={resetPassword} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ResetPassword