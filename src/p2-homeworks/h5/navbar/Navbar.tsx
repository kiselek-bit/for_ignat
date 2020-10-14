import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'
import {PATH} from "../routes/Routes";


 export function Navbar () {

    return(
        <div className={s.wrapper}>
            <nav className={s.navigation}>
                <div className={s.item}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>PreJunior</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>Junior++</NavLink>
                </div>
            </nav>
        </div>
    )
}