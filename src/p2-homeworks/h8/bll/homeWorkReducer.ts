import {ManType} from "../HW8";
export type SortUpActionType = {
    type: 'sort'
    payload: 'up'
}
export type SortDownActionType = {
    type: 'sort'
    payload: 'down'
}
export type CheckActionType = {
    type: 'check'
    payload: number
}
export type ActionsType = SortUpActionType | SortDownActionType | CheckActionType



export const homeWorkReducer = (state: Array<ManType>, action: ActionsType): Array<ManType> => {
    switch (action.type) {
        case "sort": {
            let newState = [...state]
            if (action.payload === 'up') {
                newState.sort((a: ManType, b: ManType) => a.name > b.name ? 1 : -1)
                return newState
            }
            if (action.payload === 'down') {
                newState.sort((a: ManType, b: ManType) => a.name < b.name ? 1 : -1)
                return newState
            }

        }
        case "check": {
            let newState = state.filter(m => m.age > action.payload)
            return newState
        }
        default:
            throw new Error('Error')
    }
};

export const SortUpAC = (): SortUpActionType => ({type: "sort", payload: 'up'})
export const SortDownAC =(): SortDownActionType => ({type: 'sort', payload: 'down'})
export const CheckAgeAC = (): CheckActionType => ({type: "check", payload: 18})