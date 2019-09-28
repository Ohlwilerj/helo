// INITIAL STATE
    const initialState = {
        username: '',
        password: '',
        profileImg: '',
    }

// ACTION CONST
const CREATE_USER = "CREATE_USER"
const CLEAR_STATE = "CLEAR_STATE"


// ACTION BUILDERS
export const createUser = (username, password, profileImg) => {
    let user = {username, password, profileImg}
    return {
        type: CREATE_USER,
        payload: user
    }
}

export const clearState = () => {
    return {
        type: CLEAR_STATE
    }
}


// REDUCER
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_USER:
            return {...state, user: action.payload}
        case CLEAR_STATE: 
            return{...state, username: '', password: '', profileImg: ''}
        default: return state
    }
}

export default reducer