const initialState = {
    isUserLoggedIn: false,
    userData: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                userData: action.payload,
                isUserLoggedIn: true
            }
        case "LOGOUT":
            return {
                ...state,
                userData: action.payload,
                isUserLoggedIn: false
            }
        default:
            return state
    }
}

export default authReducer