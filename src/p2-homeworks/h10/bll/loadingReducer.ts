
type LoadingActionType = {
    type: 'SET-LOADING'
}
type StateType = {
    loading: boolean
}

const initState = {
    loading: false
};

export const loadingReducer = (state: StateType = initState, action: LoadingActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, loading: !state.loading};
        }
        default: return state;
    }
};

export const loadingAC = (): LoadingActionType => ({type: 'SET-LOADING'}); // fix any