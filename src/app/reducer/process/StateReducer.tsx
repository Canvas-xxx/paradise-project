export const stateReducer = (state: any = { id: '', school: '', teacher: '', teacherPhone: '', driver: '', driverPhone: '', bus: '', start: '', end: '', status: '' }, action: any) => {
    switch(action.type) {
        case 'GET_NEW_STATE':
            return state = action.payload
        default:
            return state
    }
}