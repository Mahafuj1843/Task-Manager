import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from "../components/MasterLayout/LazyLoder";
import MasterLayout from '../components/MasterLayout/MasterLayout'
const ChangePassword = lazy(() => import('../components/ChangePassword'))

const ChangePassPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <ChangePassword />
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default ChangePassPage