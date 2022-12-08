import React from 'react'
import './DocButton.css'
import document from '../assets/document.svg';


export const DocButton = (props) => {
    return(
        <div>
            <button className='docButtonContainer'>
                <img src={document} alt="document" onClick={props.handleClick}/>
                <div className='docButtonTitle' >{props.title}</div>
            </button>
        </div>
    )
}

export default DocButton