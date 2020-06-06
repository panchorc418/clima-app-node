//UTILIZANDO AXIOS
const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeURL = encodeURI(direccion);
    //console.log(encodeURL);
    const instance = axios.create({
        //baseURL: 'http://free.ipwhois.io/json/8.8.4.4',
        baseURL: `http://free.ipwhois.io/json/${encodeURL}`,
        headers: { 'x-rapidapi-key': '57d07503a8msh75a6729ff2e3e6bp1c46e7jsn94bdb8d4601a' }
    });

    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data);
    //     })
    //     .catch(err => {
    //         console.log('Error!!!', err);
    //     });

    const resp = await instance.get();
    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data;
    const ciudad = data.city;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        ciudad,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}