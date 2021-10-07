import React, { Component } from 'react';
import moment from 'moment';
import './style.css';

class component extends Component {

  render() {
    const data = this.props.data;

    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="table-active">
              <th>Order Number</th>
              <th>Status</th>
              <th>Operator</th>
              <th>Location</th>
              <th>Start Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val,idx) => {
              let domStatus;

              if (val.status === 'completed') {
                domStatus = 'badge badge-success'
              }else if (val.status === 'pending'){
                domStatus = 'badge badge-warning'
              }else{
                domStatus = 'badge badge-danger'
              }

              return(
                <tr key={idx}>
                    <td className="column">#{val.conversion_revenue}</td>
                    <td className="column"><div className={domStatus}>{val.status}</div></td>
                    <td className="column">{val.full_name}</td>
                    <td className="column">{val.location}</td>
                    <td className="column">{moment(val.start_date).format('DD/MM/YY hh:mm')}</td>
                    <td className="column">{moment(val.due_date).format('DD/MM/YY hh:mm')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default component;