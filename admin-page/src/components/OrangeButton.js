import React, {useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './css/OrangeButton.css'

const OrangeButton = ({to,text}) =>{
    let LinkActive = {
        backgroundColor: "#BFBFBF"
      };
    return(
        <li>
            <NavLink to={to} style={({isActive}) => isActive ? LinkActive : undefined} className="OrangeButton">
                {text}
            </NavLink>
        </li>
    )
}

export default OrangeButton;