const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=14.6349149&lon=-90.5068824&appid=14be96673ed9d38ec779f71dba5727b7&units=metric`);

    return resp.data.main.temp;


}

module.exports = {
    getClima
}