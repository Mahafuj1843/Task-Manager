import React, { Fragment, Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { taskByStatus } from '../apiRequest/apiRequest.js';
import LazyLoader from "../components/MasterLayout/LazyLoder";
import MasterLayout from '../components/MasterLayout/MasterLayout'
const NewTask = lazy(()=>import('../components/NewTask'))

const NewTaskPage = () => {
  useEffect(()=>{
    taskByStatus("New")
  }, [])

  const task = useSelector((state)=>state.task.New)
  return (
    <Fragment>   
            <MasterLayout>   
                <Suspense fallback={<LazyLoader/>}>
                    <NewTask task={task}/>
                </Suspense>
            </MasterLayout>
        </Fragment>
  )
}

export default NewTaskPage