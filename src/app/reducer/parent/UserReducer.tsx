export const userReducer = (state: any = { username: '', password: '', sender: '' }, action: any) => {
    switch(action.type) {
        case 'SET_USERNAME':
            return state['username'] = action.payload
        case 'SET_PASS':
            return state['password'] = action.payload
        case 'SET_SENDER':
            return state['sender'] = action.payload
        default:
            return state
    }
}