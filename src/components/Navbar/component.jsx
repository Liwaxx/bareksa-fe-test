import React, { Component } from 'react';

import styles from './style';
import './style.css';
import moment from 'moment';
import logo from '../../assets/logo.png'
import profile from '../../assets/icons/profile.svg'
import chevron from '../../assets/icons/chevron.svg'
import settings from '../../assets/icons/setting.svg'
import bell from '../../assets/icons/bell.svg'
import search from '../../assets/icons/search.svg'

class component extends Component {
  
  render() {    
    return (
      <div>
        <nav className="navbar navbar-light p-2">
          <div className="navbar-brand d-flex justify-content-center align-items-center" >
            <img src={logo} alt="" className="mr-5"/>
            <div className="profile d-flex justify-content-center align-items-center">
              <div className="avatar mr-3">
                <img src={profile} alt="icons"/>
              </div>
              <div className="detail mr-3">
                <div className="name" style={styles.bold}>Reinhart H.</div>
                <div className="location" style={styles.caption}>Kemang, Jakarta</div>
              </div>
              <img src={chevron} alt="icons"/>
            </div>
          </div>
          <div className="menu d-flex justify-content-center align-items-center">
            <div action="#" className="search mr-4 p-2">
              <input type="text" placeholder="Search text" name="search" className="input-bar mr-3" />
              <img src={search} alt="icons"/>
            </div>
            <div className="icons">
              <img src={bell} className="mr-3" alt="icons"/>
              <img src={settings} alt="icons"/>
            </div>
          </div>
        </nav>
        <div className="warp-dates p-2 w-100 d-flex justify-content-end align-items-center">
          <div className="date">{moment().format('D MMMM YYYY')}</div>
        </div>
      </div>
    );
  }
}

export default component;