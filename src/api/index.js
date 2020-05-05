import axios from 'axios';

let api_url = 'https://covid19.mathdro.id/api';
const br_url = 'https://covid19.mathdro.id/api/countries/BR';
const world_url = 'https://covid19.mathdro.id/api'

const getCoronavirusInformation = async (state) => {

    if(state === 'Brazil') {
        api_url = br_url;
    }

    if(state === 'World') {
        api_url = world_url;
    }

    const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(api_url);

    const modifyData = {
        confirmed: confirmed.value,
        deaths: deaths.value,
        recovered: recovered.value,
        lastUpdate,
    }

    return modifyData;
}

export default getCoronavirusInformation;