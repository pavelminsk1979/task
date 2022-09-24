const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => {
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE-LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean):LoadingActionType => {
    return {
        type: 'CHANGE-LOADING',
        isLoading
    }as const
}