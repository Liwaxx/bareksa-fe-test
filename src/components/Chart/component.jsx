import React, { Component } from 'react';
import './style.css';
import CONST_STYLE from '../../constants/styles'

import { Pie, PolarArea, Line } from 'react-chartjs-2';
import styles from './style';
import range from '../../assets/icons/range.svg'

class component extends Component {
  state = {
    week : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }

  render() {
    const dataPiePolar = {
      labels: this.props.label,
      datasets: [
        {
          label: '# of Votes',
          data: this.props.data,
          backgroundColor: [
            CONST_STYLE.colors.BLUE,
            CONST_STYLE.colors.VIOLET,
            CONST_STYLE.colors.ORANGE_300,
            CONST_STYLE.colors.BLACK_COOL,
          ],
        },
      ],
    };

    const dataLine = canvas =>   {
      const ctx = canvas.getContext('2d');

      const g = ctx.createLinearGradient(255, 255, 255, 0);
      g.addColorStop(0, '#FFFFFF')
      g.addColorStop(1, 'rgba(120, 151, 100, 0.65)')

      return {
        labels: this.state.week,
        datasets: [
          {
            label: '# of Votes',
            data: this.props.dataLine,
            fill: true,
            backgroundColor: g,
            borderColor: 'rgba(120, 151, 100, 0.65)',
            lineTension: 0.2, 
          },
        ],
      }
    };

    const pieOptions = {
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        plugins : {
          legend :{
            position : 'bottom',
            labels : {
              usePointStyle : true,
              boxWidth : 7,
              padding : 15
            }
          }
        },
    };

    const polarOptions = {
      elements: {
          arc: {
              borderWidth: 0
          }
      },
      plugins : {
        legend :{
          position : 'bottom',
          labels : {
            usePointStyle : true,
            boxWidth : 7,
            padding : 15
          }
        }
      },
      scales: {
        r: {
          grid: {
            display: false
          },
          ticks: {
            display: false
          }
        },
      } 
    };

    const lineOptions = {
      plugins : {
        legend :{
          display : false
        }
      },
      scales: {
        y:{
            beginAtZero: true,
            grid: {
              display: false
            },
          }
      },
    };

    if (this.props.type === "1") {
      return (
        <div className="card" style={{height : '100%'}}>
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="m-0">{this.props.title}</h5>
            <div className="btn">...</div>
          </div>
          <div className="card-body">
            <Pie data={dataPiePolar} options={pieOptions} />
          </div>
        </div>
      );
    }
    else if (this.props.type === "2") {
      return (
        <div className="card" style={{height : '100%'}}>
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="m-0">{this.props.title}</h5>
            <div className="btn">...</div>
          </div>
          <div className="card-body">
            <PolarArea data={dataPiePolar} options={polarOptions} />
          </div>
        </div>
      );
    }
    else if (this.props.type === "3") {
      return (
        <div className="card" style={{height : '100%'}}>
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="m-0">{this.props.title}</h5>
            <img src={range} alt="" srcset="" />
          </div>
          <div className="card-body">
            <Line data={dataLine} options={lineOptions} height={95}/>
          </div>
          <div className="card-footer">
            <div className="caption" style={styles.caption}>Total Revenue</div>
            <h5 style={styles.bold}>${this.props.totalRevenue}</h5>
            <div className="change" style={styles.change}>
              <i class="fa fa-arrow-up" aria-hidden="true"></i> 7,00%
            </div>
          </div>
        </div>
      );
    }
  }
}

export default component;