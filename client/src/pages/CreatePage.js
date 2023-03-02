import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from "../components/MasterLayout/LazyLoder";
import MasterLayout from '../components/MasterLayout/MasterLayout'
const CreateTask = lazy(()=>import('../components/CreateTask'))

const CreatePage = () => {
  return (
    <Fragment>
            <MasterLayout>   
                <Suspense fallback={<LazyLoader/>}>
                    <CreateTask/>
                </Suspense>
            </MasterLayout>
        </Fragment>
  )
}

export default CreatePage