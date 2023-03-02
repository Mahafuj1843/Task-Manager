import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
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
                  <input placeholder="Email" className="form-control animated fadeInUp" type="email" />
                </div>
                <br />
                <div lassName="row mt-2 p-0">
                  <div className="col-md-12">
                    <button /*onClick={onRegistration}*/ className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Send</button>
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