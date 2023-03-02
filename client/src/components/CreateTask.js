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
      <div fluid={true} className="container content-body">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
            <div className="card shadow">
              <div className="card-body">
                <h4 >Create New</h4>
                <br />
                <input ref={(input)=>taskRef=input} placeholder="Task Name" className="form-control animated fadeInUp" type="text" />
                <br />
                <textarea ref={(input)=>descriptionRef=input} rows={5} placeholder="Task Description" className="form-control animated fadeInUp" type="text" />
                <br />
                <button onClick={CreateTask} className="btn float-end btn-primary animated fadeInUp">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateTask