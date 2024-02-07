let form = document.querySelector('form');
let input = document.querySelector('input');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h5 = document.querySelector('h5');
let h6 = document.querySelector('h6');
// let button = document.querySelector('.btn-danger');
let uv = document.querySelector('.uv');
let wind = document.querySelector('.wind');
let temp = document.querySelector('.temp');
let windire = document.querySelector('.wind-dir')

const getWeather = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch(`
        https://api.weatherapi.com/v1/forecast.json?key=40580c9300ca4095801184405232609&q=${input.value}&days=1&aqi=yes&alerts=nohaha`)
    const data = await response.json();
    h2.innerText = data.location.name;
    h1.innerText = `${data.current.temp_c}° C`;
    h5.innerText = data.current.condition.text;
    h6.innerText = data.location.localtime;
    uv.innerText = data.current.uv;
    wind.innerText = data.current.wind_kph;
    temp.innerText = data.current.temp_f;
    windire.innerText = data.current.wind_dir;

    // console.log(data)
    } catch (error) {
        window.alert("Enter Correct City Name !");
    }
    form.reset();
}

form.addEventListener('submit', getWeather);