import records from '../../../fake-db/records'
const initialState = [...records]

const recordReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_RECORD":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default recordReducer