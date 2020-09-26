import { GET_HOUSING_DATA } from "./types";

export const getHousingData = (mapType) => dispatch => {
    const url = process.env.NODE_ENV.trim() === 'development' ? 'http://localhost:8000' : 'https://usa-housing-data-server.herokuapp.com';
    fetch(`${url}/api/housingData/data?mapType=${mapType}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: GET_HOUSING_DATA,
                payload: {
                    mapType,
                    data
                }
            });
        });
}