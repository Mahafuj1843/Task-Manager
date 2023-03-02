import React, { Fragment } from 'react'

const Dashboard = ({task}) => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          {
            task.map((item, i)=>
            <div key={i.toString()} className="col-12 col-lg-3 col-sm-6 col-md-3 p-2">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="animated fadeInUp">{item._id}</h5>
                <h6 className="text-secondary animated fadeInUp">{item.total}</h6>
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

export default Dashboard