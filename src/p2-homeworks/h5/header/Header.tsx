import React, {useState} from "react";
import s from './Header.module.css'
import {Navbar} from "../navbar/Navbar";

function Header() {
    let [handler, setHandler] = useState<boolean>(false)
    const onClickHandler = () => {
        setHandler(!handler)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>REACT HOMEWORKS:</div>
            <div className={s.menu}>
                <div className={s.mobile_nav_icon} onClick={onClickHandler}></div>
                {handler && <Navbar />}
            </div>
        </div>
    );
}

export default Header;
