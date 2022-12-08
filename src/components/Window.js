import React from 'react';
import './Window.css'

import search from '../assets/search.svg';
import FolderButton from './FolderButton';
import DocButton from './DocButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { faClock, faFolder, faArrowAltCircleDown, faStar} from '@fortawesome/free-solid-svg-icons'

export const Window = (props) => {
    const openState = props.toggle;
    const handleClose = props.action;
    
    function joanneFolder() {
        alert('clicked joannelee folder');
      }
    
      function joanneDoc() {
        alert('clicked joannelee doc');
      }

    return(
        <div className={openState ? "window-container-active" : "window-container"}>
            
            <div className='horizontal'>
                <div className='sidebar'>
                    <div className='tripleButtons'>
                        <button className='buttons close' onClick={handleClose}/>
                        <button className='buttons under'/>
                        <button className='buttons expand'/>
                    </div>
                    <div className='subheader'>Favourites</div>
                    <div className='tabs'> 
                        <FontAwesomeIcon icon={faClock} className='tabIcons fa-sm'/>
                        <div className='subsubheader'>Welcome</div>
                    </div>
                    <div className='tabs'> 
                        <FontAwesomeIcon icon={faFolder} className='tabIcons fa-sm'/>
                        <div className='subsubheader'>To</div>
                    </div>
                    <div className='tabs'> 
                        <FontAwesomeIcon icon={faArrowAltCircleDown} className='tabIcons fa-sm'/>
                        <div className='subsubheader'>My</div>
                    </div>
                    <div className='tabs'> 
                        <FontAwesomeIcon icon={faStar} className='tabIcons fa-sm'/>
                        <div className='subsubheader'>Website !</div>
                    </div>
                </div>
                <div className='vertical'>
                    <div className='topHeader'>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className='arrow fa-xl'/>
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrow fa-xl'/>
                        <div className='windowName'>joannelee</div>
                        <img src={search} alt="search" className='search'/>
                    </div>
                    <div className='mainContainer'>
                        <FolderButton title="joannelee" handleClick={joanneFolder}/>
                        <DocButton title="some document" handleClick={joanneDoc}/>
                        <DocButton title="some document" handleClick={joanneDoc}/>
                        <DocButton title="some document" handleClick={joanneDoc}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Window