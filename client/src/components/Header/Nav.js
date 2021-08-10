import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav(){

    return (
        <>
            <nav> 
                <div>
                    <NavLink to="/home">
                        Home
                    </NavLink>

                    <NavLink to="/login">
                        Login
                    </NavLink>

                    <NavLink to="/signin">
                        Sign in
                    </NavLink>
                </div>   
            </nav>
        </>
    )
}