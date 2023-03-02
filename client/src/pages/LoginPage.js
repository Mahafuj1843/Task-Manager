import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from "../components/MasterLayout/LazyLoder";
const Login = lazy(()=>import('../components/Login'))

const LoginPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader/>}>
        <Login/>
      </Suspense>
    </Fragment>
  )
}

export default LoginPage