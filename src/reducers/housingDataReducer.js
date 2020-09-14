import { GET_HOUSING_DATA } from '../actions/types';

const initialState = []

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_HOUSING_DATA:
            return action.payload;
        default:
            return state;
    }
}