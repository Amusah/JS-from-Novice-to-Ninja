/*******************DOM MANIPULATION**********************/
let cityForm = document.querySelector('form');
let card = document.querySelector('.card');
let details = document.querySelector('.details');
let time = document.querySelector('img.time');
let icon = document.querySelector('.icon img');
let errMsg = document.querySelector('.change-location label');
let countrySelector = document.querySelector('select.countrySelect');

let opt = countrySelector.options[countrySelector.selectedIndex]
console.log(opt.text)

const updateUI = (data)=>{
    //console.log(data);

    // let cityDetails = data.cityDetails;
    // let weatherDetails = data.weatherDetails;

    // destructuring object properties
    let { cityDetails, weatherDetails } = data;

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherDetails.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherDetails.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

     // Update day or night with icons based on images
    const iconSrc = `img/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

     let timeSrc = null;
     weatherDetails.IsDayTime ? timeSrc = 'img/day.svg' : timeSrc = 'img/night.svg';
     time.setAttribute('src', timeSrc);
     // if(weatherDetails.IsDayTime){
     //     timeSrc = 'img/day.svg'
     // }else{
     //     timeSrc = 'img/night.svg'
     // }

    // remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

}

const updateCity = async (city)=>{
    let cityDetails = await getCity(city);
    let weatherDetails = await getWeather(cityDetails.Key);

    // return {
    //     cityDetails: cityDetails,
    //     weatherDetails: weatherDetails
    // }

    return { cityDetails, weatherDetails } //Object shorthand notation
}
console.log(countrySelector.value)
cityForm.addEventListener('submit', e =>{
    // Prevent default action
    e.preventDefault();

    // getting name of city
    let city = cityForm.city.value.trim();
    cityForm.reset();

    // update ui with the city data
    updateCity(city)
        .then(data => {
            updateUI(data);
            console.log(data);
            errMsg.textContent = 'Enter a location for weather information'
            errMsg.classList.remove('errMsg');
        })
        .catch(err=>{
            console.log(err);
            errMsg.textContent = 'Location not found';
            errMsg.classList.add('errMsg');
        });

        // Setting local storage
        localStorage.setItem('city', city);
});

// if(localStorage.getItem('city')){
//     updateCity(localStorage.getItem('city'))
//         .then(data => updateUI(data))
//         .catch(err => console.log(err));
// }