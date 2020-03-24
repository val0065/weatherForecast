function assignCity() {
    let city;
    let tempDescriptionDetail = document.querySelector('.temp-description-detail');
    let tempDegree = document.querySelector('.temp-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let tempIcon = document.querySelector('.temp-icon');
    city = document.getElementById("city").value;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&lang=cz&appid=35eadc12a742fadf5f97b1c0db70121f`;

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let celsius = Math.round(data.main.temp - 273.15) + ' °C';
            tempDegree.textContent = celsius;
            let desc = data.weather[0].description;
            tempDescriptionDetail.textContent = desc.toUpperCase();
            locationTimezone.textContent = data.name;
            let icon = data.weather[0].icon;
            tempIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            let dawn = data.sys.sunrise;
            let dusk = data.sys.sunset;
        });
}