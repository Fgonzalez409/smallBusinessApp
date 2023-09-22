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

const listings = (state = [], action) => {
    switch (action.type) {
      case 'ADD_LISTING':
        return [...state, action.value];
      case 'DELETE_LISTING':
        const listings = [...state];
        listings.splice(action.value, 1);
        return listings;
      default:
        return state;
    }
  };

export default combineReducers({ user, listings })