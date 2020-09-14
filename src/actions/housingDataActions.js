import { GET_HOUSING_DATA } from "./types";

export const getHousingData = () => dispatch => {
    fetch(`http://localhost:8000/api/housingData/data`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: GET_HOUSING_DATA,
                payload: data
            });
        });
}