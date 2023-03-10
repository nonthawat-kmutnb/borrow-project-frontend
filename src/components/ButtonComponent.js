import React, {useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './css/ButtonComponent.css'

const ButtonComponent = ({to,text}) =>{
    let LinkActive = {
        backgroundColor: "#BFBFBF"
      };
    return(
        <li>
            <NavLink to={to} style={({isActive}) => isActive ? LinkActive : undefined} className="round-square-button">
                {text}
            </NavLink>
        </li>
    )
}

export default ButtonComponent;