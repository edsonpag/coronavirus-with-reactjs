import axios from 'axios';

const api_url = 'https://covid19.mathdro.id/api/';

export const getCoronavirusInformation = async () => {
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