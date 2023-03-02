import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from "../components/MasterLayout/LazyLoder";
const ResetPassword = lazy(()=>import('../components/ResetPassword'))

const ResetPassPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader/>}>
        <ResetPassword/>
      </Suspense>
    </Fragment>
  )
}

export default ResetPassPage