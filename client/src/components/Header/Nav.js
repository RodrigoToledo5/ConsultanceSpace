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

                    <NavLink to="/log-in">
                        Login
                    </NavLink>

                    <NavLink to="/sign-in">
                        Sign in
                    </NavLink>
                </div>   
            </nav>
        </>
    )
}