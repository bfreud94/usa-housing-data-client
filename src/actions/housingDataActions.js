import { GET_HOUSING_DATA } from "./types";

export const getHousingData = () => dispatch => {
    //const url = 'http://localhost:8000';
    const url = 'https://usa-housing-data-server.vercel.app';
    fetch(`${url}/api/housingData/data`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: GET_HOUSING_DATA,
                payload: data
            });
        });
}