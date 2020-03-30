import React from 'react';
import './Pro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Pro = (props) => {
    console.log(props);
    const {img, name, phone, website, salary} = props.pro;
    return (
        <div className="pro">
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="user-name">{name}</h4>
                <p><small>Website: {website}</small></p>
                <p>Phone: {phone}</p>
                <p><small>Salary: {salary}</small></p>
                <button className="btn" onClick={() => props.handleAddUser(props.pro)} >
                    <FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
            </div>
        </div>
    );
};

export default Pro;