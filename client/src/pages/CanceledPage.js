import React, { Fragment, Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { taskByStatus } from '../apiRequest/apiRequest.js';
import LazyLoader from "../components/MasterLayout/LazyLoder";
import MasterLayout from '../components/MasterLayout/MasterLayout'
const Canceled = lazy(()=>import('../components/Canceled'))

const CanceledPage = () => {

  useEffect(()=>{
    taskByStatus("Canceled")
  }, [])

  const task = useSelector((state)=>state.task.Canceled)

  return (
    <Fragment>
            <MasterLayout>   
                <Suspense fallback={<LazyLoader/>}>
                    <Canceled task={task}/>
                </Suspense>
            </MasterLayout>
        </Fragment>
  )
}

export default CanceledPage