import { GET_HOUSING_DATA } from '../actions/types';

const initialState = {
    data: {
        'All Homes': [],
        'Condo Co-ops': [],
        'Single Family Homes': [],
        '1-Bedroom': [],
        '2-Bedroom': [],
        '3-Bedroom': [],
        '4-Bedroom': [],
        '5-Bedroom': []
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HOUSING_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.payload.mapType]: action.payload.data
                }
            };
        default:
            return state;
    }
}