import React, { useRef, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateTaskRequest } from '../apiRequest/apiRequest.js'
import { ErrorToast, IsEmpty } from '../helper/formHelper'

const CreateTask = () => {
  let taskRef,descriptionRef = useRef()
  let navigate = useNavigate();


  const CreateTask = () =>{
    let task=taskRef.value;
    let description= descriptionRef.value;

    if(IsEmpty(task)){
      ErrorToast("Task name required !")
    }
    else if(IsEmpty(description)){
        ErrorToast("Description required !")
    }
    else{
      CreateTaskRequest(task,description).then((result)=>{
        if(result)  navigate('/All')
      })
    }
  }
  return (
    <Fragment>
      <div className="container vh-100">
        <div className="row justify-content-center h-100">
          <div className="col-md-7 col-lg-6">
            <div className="shadow-sm animated fadeIn w-100 p-3">
              <div className="d-flex flex-column align-items-center gap-3 px-2">
                <span className='text-start col-12'>
                  <h4 className='m-0 fw-bold'>Create New Task</h4>
                </span>
                <div className="col-12 text-start gap-1">
                  <lable className='fw-normal'>Task Name</lable>
                  <input ref={(input)=>taskRef=input} placeholder="Task Name" className="form-control animated fadeInUp mt-1 fw-light" type="email" />
                </div>
                <div className="col-12 text-start gap-1">
                  <lable className='fw-normal'>Task Description</lable>
                  <textarea ref={(input)=>descriptionRef=input} rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text" />
                </div>
                <div className="col-12">
                  <button onClick={CreateTask} className="btn w-100 float-end btn-primary animated fadeInUp">Create</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateTask