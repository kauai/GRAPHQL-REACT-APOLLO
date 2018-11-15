import React from 'react'

const style = {
        padding:10,
        border:'1px solid #fff',
        margin: '10px 0'
}

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
                           <h4>Mission: { mission_name }</h4>
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
