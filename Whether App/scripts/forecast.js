/*****************INTERACTING WITH THE API**********************/
let key = 'auxh1Mc7DEzKtUVEUScNXkjJp7sZx7V1';

// get weather information
const getWeather = async (id)=>{
    let base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    let query = `${id}?apikey=${key}`;

    let response = await fetch(base + query);
    let data = await response.json();

    return data[0];
}

// get city information
const getCity = async (city)=>{
    let base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    let query = `?apikey=${key}&q=${city}`;

    let response = await fetch(base + query);
    let data = await response.json();

    return data[0];
}
// getCity('manchester').then(data => {
//     return getWeather(data.Key);
// }).then(data =>{
//     console.log(data);
// }).catch(err => console.log(err));
