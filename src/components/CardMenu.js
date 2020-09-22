import React from 'react';
import {NavLink} from 'react-router-dom';

const CardMenu = (props) => {
    const {title, text, icon, link} = props;
    const navLink = link === '/aboutme' ? 
        (<NavLink to={link}>About Me</NavLink>) :
        (<NavLink to={link}>Use now</NavLink>)
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <div className="card white ">
                    <div className="card-content">
                        <span className="card-title">
                            <i className={`fa fa-${icon}`} aria-hidden="true"></i> 
                            &nbsp;
                            {title}
                        </span>
                        <p>{text}</p>
                    </div>
                    <div className="card-action">
                        {navLink}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CardMenu