import React from 'react'
import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSun, faBatteryFull, faWifi, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import DateTime from './DateTime';

export const Topbar = () => {
    function handleSun() {alert('sun clicked');}
    function handleBattery() {alert('Battery clicked');}
    function handleWifi() {alert('wifi clicked');}
    function handleUser() {alert('user clicked');}

    return(
        <div className="topNavBar">
            <FontAwesomeIcon icon={faHeart} className="icons"/>
            <div className="topnav-right">
                <button className='icon-button' onClick={handleSun}><FontAwesomeIcon icon={faSun} className="icons fa-lg"/></button>
                <button className='icon-button' onClick={handleBattery}><FontAwesomeIcon icon={faBatteryFull} className="icons fa-lg"/></button>
                <button className='icon-button' onClick={handleWifi}><FontAwesomeIcon icon={faWifi} className="icons fa-lg"/></button>
                <button className='icon-button' onClick={handleUser}><FontAwesomeIcon icon={faUserCircle} className="icons fa-lg"/></button>
                <DateTime />
            </div>
      </div>
    )
}

export default Topbar