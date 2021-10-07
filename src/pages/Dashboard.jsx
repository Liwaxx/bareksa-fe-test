import React, { Component } from 'react';
import Navbar from '../components/Navbar/component';
import Chart from '../components/Chart/component';
import Calendar from '../components/Calendar/component';
import Table from '../components/Table/component';
import axios from 'axios';

class Dashboard extends Component {

  state = {
    data : {},
    dataUserCategory : [],
    labelUserCategory : [],
    dataLineChart: [],
    dataRevenue : 0,
    dataOrders : []
  }

  componentDidMount () {
    axios.get('https://ae1cdb19-2532-46fa-9b8f-cce01702bb1e.mock.pstmn.io/takehometest/web/dashboard').then(
      res => {

        let userCategory = res.data.data.user_category;
        let labelCategory = []
        let dataLineChart = [];
        let totalRevenue = 0;

        res.data.data.orders.map(val => {
            totalRevenue += parseInt(val.conversion_revenue)
            return (
              dataLineChart.push(val.conversion_revenue)
            );
         }
        );
      
        Object.keys(userCategory).forEach(function(k){
           labelCategory.push(k)
        });

        this.setState({
          data : res.data.data,
          dataUserCategory : [userCategory.conservative, userCategory.moderate,userCategory.risk_taker,userCategory.risk_averse],
          labelUserCategory : labelCategory,
          dataLineChart : dataLineChart,
          dataRevenue : totalRevenue,
          dataOrders : res.data.data.orders
        })

        console.log(this.state)
      }

    )
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="content container-fluid mt-3">
          <div className="row mb-3">
            <div className="col-md-3">
              <Chart type="1" title="Conversion" label={this.state.labelUserCategory} data={this.state.dataUserCategory}/>
            </div>
            <div className="col-md-3">
              <Chart type="2" title="Users" label={this.state.labelUserCategory} data={this.state.dataUserCategory}/>
            </div>
            <div className="col-md-6">
              <Chart type="3" title="Revenue" dataLine={this.state.dataLineChart} totalRevenue={this.state.dataRevenue}/>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <Calendar/>
            </div>
            <div className="col-md-9">
              <h5 style={{fontWeight: 700}} className="mb-3" >Orders</h5>
              <Table data={this.state.dataOrders}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;