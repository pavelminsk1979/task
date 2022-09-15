import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Pages";
import st from './Header.module.css'

function Header() {
    return (
        <div>

            <NavLink
                className={st.link}
                to={PATH.PRE_JUNIOR}> preJunior </NavLink>
            <NavLink
                className={st.link}
                to={PATH.JUNIOR}> junior </NavLink>
            <NavLink
                className={st.link}
                to={PATH.JUNIOR_PlUS}> juniorPlus </NavLink>

        </div>
    )
}

export default Header
