import React, { Fragment, Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { taskByStatus } from '../apiRequest/apiRequest.js';
import LazyLoader from "../components/MasterLayout/LazyLoder";
import MasterLayout from '../components/MasterLayout/MasterLayout'
const ProgressTask = lazy(()=>import('../components/ProgressTask'))

const ProgressTaskPage = () => {
  useEffect(()=>{
    taskByStatus("Progress")
  }, [])

  const task = useSelector((state)=>state.task.Progress)

  return (
    <Fragment>
            <MasterLayout>   
                <Suspense fallback={<LazyLoader/>}>
                    <ProgressTask task={task}/>
                </Suspense>
            </MasterLayout>
        </Fragment>
  )
}

export default ProgressTaskPage