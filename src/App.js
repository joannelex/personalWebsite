import React, {useState} from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';

import me2 from './assets/me2.svg';
import pfpDark from './assets/blue-circle.png';
import pfpLight from './assets/yellow-circle.png';

import FolderButton from './components/FolderButton';
import DocButton from './components/DocButton';
import Window from './components/Window';
import Bottombar from './components/Bottombar';
import DateTime from './components/DateTime';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSun, faMoon, faBatteryFull, faWifi, faUserCircle } from '@fortawesome/free-solid-svg-icons'

function App() {
  // if we want to respect users original settings: 
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [theme, setTheme] = useLocalStorage('dark');
  const [joanneOpen, setJoanneOpen] = useState(true);
  const [joanneDocOpen, setJoanneDocOpen] = useState(false);
  const [wifiOpen, setWifiOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(true);
  const [heartOpen, setHeartOpen] = useState(false);

  let isLight = (theme === 'light') ? true : false;
  const handleTheme = () => {
      const newTheme = (theme === 'light') ? 'dark' : 'light';
      isLight = (newTheme === 'light') ? true : false;
      setTheme(newTheme);
  };
  function joanneFolder() { setJoanneOpen(!joanneOpen); }
  function joanneDoc() { setJoanneDocOpen(!joanneDocOpen); }
  function handleBattery() {alert('i need a battery pun');}
  function handleWifi() {
    setUserOpen(false);
    setHeartOpen(false);
    setWifiOpen(!wifiOpen);
  }
  function handleUser() {
    setWifiOpen(false);
    setHeartOpen(false);
    setUserOpen(!userOpen);
  }
  function handleHeart() {
    setWifiOpen(false);
    setUserOpen(false);
    setHeartOpen(!heartOpen);
  }

  return (
    <div className='App' data-theme={theme}>
      <img src={me2} className="avatar" alt="avatar"/>
      <div className="topNavBar">
          <button className='icon-button' onClick={handleHeart}><FontAwesomeIcon icon={faHeart} className="icons"/></button>
            <div className="topnav-right">
              {isLight ? <button className='icon-button' onClick={handleTheme}><FontAwesomeIcon icon={faMoon} className="icons fa-lg"/></button> :
                        <button className='icon-button' onClick={handleTheme}><FontAwesomeIcon icon={faSun} className="icons fa-lg"/></button>}
                <button className='icon-button' onClick={handleBattery}><FontAwesomeIcon icon={faBatteryFull} className="icons fa-lg"/></button>
                <button className='icon-button' onClick={handleWifi}><FontAwesomeIcon icon={faWifi} className="icons fa-lg"/></button>
                <button className='icon-button' onClick={handleUser}><FontAwesomeIcon icon={faUserCircle} className="icons fa-lg"/></button>
                <DateTime />
            </div>
      </div>
      {heartOpen && 
        <div className='heartDropdown'>Made with ❤️</div>
      }

      {wifiOpen && 
        <div className='wifiDropdown'>
          <div className='wifi-header'>Connect with me!</div>
          <div className='wifi-text'>✉️ joanne.jiwoo@gmail.com</div>
          <div className='wifi-text'>📞 778-111-1111</div>
          <div className='wifi-text'>--- socials below---</div>
        </div>}
      {userOpen && 
        <div className='userDropdown'>
          {isLight ? <img src={pfpLight} className="pfp" alt="pfp"/> : <img src={pfpDark} className="pfp" alt="pfp"/>}
          <div className='profile-header'>Joanne Lee</div>
          <div className='profile-subHeader'>UBC Computer Science | Year 3</div>
          <div className='profile-text'>
            Hey there! 👋 nice to meet you my name is joannne leleeee anifjdfoijoajfodjfm wowowowoowow 
            hi hello beeeeeeeepboop jdifosfdsifhdishfiuahfiusdhfui gracias djiajfditkotk fdap =car beep
          </div>
        </div>}
      

        <div className='joanneFolder'>
          <FolderButton title="joannelee" handleClick={joanneFolder}/>
          <DocButton title="some document" handleClick={joanneDoc}/>
        </div>
        <div className='window'><Window toggle={joanneOpen} action={joanneFolder}/></div>
        {joanneDocOpen && <div className='pdf'>hola</div>}

        <div className='bottombar-wrapper'>
          <Bottombar theme={theme}/>
        </div>
    </div>
  );
}

export default App;
