import { GET_HOUSING_DATA } from "./types";

export const getHousingData = () => dispatch => {
    //http://localhost:8000
    const url = 'http://usahousingdataserver-env.eba-rmsyn4de.us-east-2.elasticbeanstalk.com';
    fetch(`${url}/api/housingData/data`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: GET_HOUSING_DATA,
                payload: data
            });
        });
}