import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from "../components/MasterLayout/LazyLoder";
const ForgetPassword = lazy(()=>import('../components/ForgetPassword'))

const ForgetPassPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader/>}>
        <ForgetPassword/>
      </Suspense>
    </Fragment>
  )
}

export default ForgetPassPage