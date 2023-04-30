import axios from 'axios';

const fetchData = async () => {
    const url = 'https://data.covid19india.org/data.json';

    try {
        const resp = await axios.get(url);
        const data = await resp.data;
        return data;
    }
    catch (error) {
        console.log(error.message)
    }
}


export default fetchData;
