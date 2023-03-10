import React, {useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const ButtonComponent = ({to,text}) =>{
    let LinkActive = {
        backgroundColor: "#2D86FF"
      };
    return(
        <li>
            <NavLink to={to} style={({isActive}) => isActive ? LinkActive : undefined}>
                {text}
            </NavLink>
        </li>
    )
}