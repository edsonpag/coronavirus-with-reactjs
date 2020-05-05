import axios from 'axios'
const api_url = 'https://covid19-brazil-api.now.sh/api/report/v1'

const getBrazilianStates = async () => {
    const response = await axios.get(api_url)
    const { data } = response.data;
    let uf = [];

    for(let i of data) {
        uf.push(i.uf)
    }

    return uf;

}

export default getBrazilianStates;