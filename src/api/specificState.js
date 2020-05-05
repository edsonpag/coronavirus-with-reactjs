import axios from 'axios';
import getCoronavirusInformation from './index';
const api_url = 'https://covid19-brazil-api.now.sh/api/report/v1'


const getSpecificState = async (state) => {
    if(state === 'Brazil' || state === 'World') {
        return getCoronavirusInformation(state)
    }

    if(state !== 'Brazil') {
        const response = await axios.get(`${api_url}/brazil/uf/${state}`)
        const { cases, deaths, datetime } = response.data
        console.log(response.data)
        const confirmed = cases;
        const recovered = 0;
        const lastUpdate = datetime;

        return {
            confirmed,
            deaths,
            recovered,
            lastUpdate
        }
    }


}

export default getSpecificState;