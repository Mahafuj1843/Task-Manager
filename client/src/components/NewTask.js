import React, { Fragment } from 'react'
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCalendar } from "react-icons/ai"
import { taskByStatus } from '../apiRequest/apiRequest'
import { DeleteTask, UpdateTask } from '../helper/alert'

const NewTask = ({ task }) => {

  const updateTask = (id, status) =>{
    UpdateTask(id, status).then((result)=>{
      if(result) taskByStatus("New")
    })
  }

  const deleteTask = (id) =>{
        DeleteTask(id).then((result)=>{
          if(result) taskByStatus("New")
        })
  }
  return (
    <Fragment>
      <div fluid={true} className="container content-body">
        <div className="row p-0 m-0 mb-2 mb-lg-0">
          <div className="col-12 col-md-6 col-lg-8 px-3">
            <h5>New Task</h5>
          </div>
          <div className="col-12 float-end col-md-6 col-lg-4 px-2">
            <div className="row">
              <div className="col-8">
                <input className="form-control w-100" />
              </div>
              <div className="col-4">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0">
            {
              task.map((item, i)=>
                <div key={i.toString()} className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h6 className="animated fadeInUp">{item.title}</h6>
                    <p className="animated fadeInUp">{item.desc}</p>
                    <p className="m-0 animated fadeInUp p-0">
                      <AiOutlineCalendar /> {item.createDate}
                      <a onClick={updateTask.bind(this,item._id,item.status)} className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                      <a onClick={deleteTask.bind(this,item._id)} className="icon-nav text-danger mx-1"><AiOutlineDelete /></a>
                      <a className="badge float-end bg-success">{item.status}</a>
                    </p>
                  </div>
                </div>
              </div>
              )
            }
        </div>
      </div>
    </Fragment>
  )
}

export default NewTask