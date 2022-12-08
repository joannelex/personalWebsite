import React from 'react'
import './Bottombar.css'

import mail from '../assets/mail.svg';
import dev from '../assets/dev-dark.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

import mailLight from '../assets/mail-light.svg';
import devLight from '../assets/dev-light.svg';
import facebookLight from '../assets/facebook-light.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import githubLight from '../assets/github-light.svg';

export const Bottombar = (props) => {
    function handleMail() { window.open('mailto:joanne.jiwoo@gmail.com?') }
    function handleDev() { window.location.href = 'https://devpost.com/joanne-jiwoo?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' };
    function handleFacebook() { window.location.href = 'https://www.facebook.com/joanne.jiwoo'; }
    function handleLinkedin() { window.location.href = 'https://www.linkedin.com/in/joanne-lee-03a8901ab/'; }
    function handleGithub() {alert('clicked gh');}
    
    return(
        <div className="bottombar">
            <button className="bottombar-icons">{(props.theme === 'dark') ? <img src={mail} alt="mail" onClick={handleMail}/> : <img src={mailLight} alt="mail" onClick={handleMail}/>}</button>
            <button className="bottombar-icons">{(props.theme === 'dark') ? <img src={dev} alt="mail" onClick={handleDev}/> : <img src={devLight} alt="mail" onClick={handleDev}/>}</button>
            <button className="bottombar-icons">{(props.theme === 'dark') ? <img src={facebook} alt="facebook" onClick={handleFacebook}/> : <img src={facebookLight} alt="facebook" onClick={handleFacebook}/>}</button>
            <button className="bottombar-icons">{(props.theme === 'dark') ? <img src={linkedin} alt="linkedin" onClick={handleLinkedin}/> : <img src={linkedinLight} alt="linkedin" onClick={handleLinkedin}/>}</button>
            <button className="bottombar-icons">{(props.theme === 'dark') ? <img src={github} alt="github" onClick={handleGithub}/> : <img src={githubLight} alt="github" onClick={handleGithub}/>}</button>
        </div>
    )
}

export default Bottombar