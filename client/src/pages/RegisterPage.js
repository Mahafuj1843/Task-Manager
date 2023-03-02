import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from "../components/MasterLayout/LazyLoder";
const Register = lazy(()=>import('../components/Register'))

const RegisterPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader/>}>
        <Register/>
      </Suspense>
    </Fragment>
  )
}

export default RegisterPage