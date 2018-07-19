export const stateReducer = (state: any = { id: '', school: '', teacher: '', teacherPhone: '', driver: '', driverPhone: '', bus: '', time: '', status: '' }, action: any) => {
    switch(action.type) {
        case 'GET_NEW_STATE':
            return state = action.payload
        default:
            return state
    }
}