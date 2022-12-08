import React from 'react'
import './FolderButton.css'
import folder from '../assets/folder.svg';

export const FolderButton = (props) => {
    return(
        <div>
            <button className='folderButtonContainer'>
                <img src={folder} alt="folder" onClick={props.handleClick}/>
                <div className='folderButtonTitle' >{props.title}</div>        
            </button>
        </div>
    )
}

export default FolderButton