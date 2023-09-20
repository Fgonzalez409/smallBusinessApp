import { combineReducers } from 'redux'


const user = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            const cars = [ ...state ]
            cars.splice(action.value, 1)
            return cars
        default:
            return state
    }
}

const makes = (state = [], action) => {
    switch(action.type) {
        case "FETCH_MAKES":
            return action.value

        case "REMOVE_MAKE":
            const makes = [...state]
            makes.splice(action.value, 1)
            return makes
        default:
            return state
    }
}

export default combineReducers({ user, cars, makes })