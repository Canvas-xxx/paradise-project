export const userReducer = (state: any = { username: '', password: '', sender: '' }, action: any) => {
    switch(action.type) {
        case 'SET_USERNAME':
            const obj1: Object = { username: action.payload.username, password: action.payload.password, sender: state.sender }
            return state = obj1
        case 'SET_SENDER':
            const obj2: Object = { username: state.username, password: state.password, sender: action.payload }
            return state = obj2
        default:
            return state
    }
}