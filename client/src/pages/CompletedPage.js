import React, { Fragment, Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { taskByStatus } from '../apiRequest/apiRequest.js';
import LazyLoader from "../components/MasterLayout/LazyLoder";
import MasterLayout from '../components/MasterLayout/MasterLayout'
const CompletedTask = lazy(()=>import('../components/CompletedTask'))

const CompletedPage = () => {
  useEffect(()=>{
    taskByStatus("Completed")
  }, [])

  const task = useSelector((state)=>state.task.Completed)

  return (
    <Fragment>
            <MasterLayout>   
                <Suspense fallback={<LazyLoader/>}>
                   <CompletedTask task={task}/>
                </Suspense>
            </MasterLayout>
        </Fragment>
  )
}

export default CompletedPage