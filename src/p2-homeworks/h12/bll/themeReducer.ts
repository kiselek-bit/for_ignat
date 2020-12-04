type ThemeStateType = {
    theme: string
}
const initState: ThemeStateType = {
    theme: 'some'
};

export const themeReducer = (state:ThemeStateType = initState, action: ChangeThemeACType): ThemeStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

type ChangeThemeACType = {
    type: 'CHANGE_THEME'
    theme: string
}
export const changeThemeC = (theme: string): ChangeThemeACType => {
    return {type: 'CHANGE_THEME', theme}
}; // fix any