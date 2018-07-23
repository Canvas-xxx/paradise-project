export const userReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_USER':
            return state = {}
        case 'FETCH_USER_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}

export const senderReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_SENDER':
            return state = {}
        case 'FETCH_SENDER_FULFILLED':
            return state = action.payload
        default:
            return state
    }
}

export const userRejectedReducer = (state: any = {}, action: any) => {
    switch(action.type) {
        case 'FETCH_USER_REJECTED':
            return state = action.payload
        default:
            return state
    }
}