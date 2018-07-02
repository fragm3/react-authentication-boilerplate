import axios from 'axios';
import obj from '../../global';
const BASE_URL = obj.dataapiURL;

//export {getFoodData, getCelebrityData};

export const getFoodData = () => {
    const url = `${BASE_URL}\api\jokes\food`;
    console.log(obj.dataapiURL)
    return axios.get(url).then(response => response.data);
}

function  getCelebrityData() {
    const url = `${BASE_URL}\api\jokes\celebrity`;
    return axios.get(url).then(response => response.data);
}

