import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector((state:AppStoreType) => state.theme.theme)

    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    const onChangeTheme = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s.superSelect}>
                <SuperSelect onChangeOption={onChangeTheme}
                             value={theme}
                             options={themes}/>
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
