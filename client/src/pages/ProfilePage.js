import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from "../components/MasterLayout/LazyLoder";
import MasterLayout from '../components/MasterLayout/MasterLayout'
const Profile = lazy(()=>import('../components/Profile'))

const ProfilePage = () => {
  return (
    <Fragment>
            <MasterLayout>   
                <Suspense fallback={<LazyLoader/>}>
                    <Profile/>
                </Suspense>
            </MasterLayout>
        </Fragment>
  )
}

export default ProfilePage