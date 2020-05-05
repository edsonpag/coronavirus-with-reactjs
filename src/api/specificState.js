import axios from 'axios';
const api_url = 'https://covid19-brazil-api.now.sh/api/report/v1'


const getSpecificState = async (state) => {
    if(state) {
        const response = await axios.get(`${api_url}/brazil/uf/${state}`)
        const { cases, deaths, refuses, datetime } = response.data
        const confirmed = cases;
        const recovered = refuses;
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