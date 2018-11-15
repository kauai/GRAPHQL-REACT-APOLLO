import React from 'react'
import classNames from 'classnames'


const LaunchItem = ({ launches }) => 
    (<div>
        {launches.map(({
            mission_name,
            flight_number,
            launch_year,
            launch_success,
            launch_date_local
            }) => {
           return <div className="card card-body mb-3">
                    <div className='row'>
                       <div className="col-md-9">
<h4>Mission:<span className={classNames(
                        {
                            'text-success':launch_success,
                            'text-danger':!launch_success
                        })}>{ mission_name }</span></h4>
                           <p>Date: { launch_date_local }</p>
                       </div>
                       <div className="col-md-3">
                           <button className="btn btn-secondary">Detalhes</button>
                       </div>
                    </div>
                 </div>
        })}
      </div>)

export default LaunchItem
