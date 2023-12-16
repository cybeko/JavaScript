window.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
    const weatherElement = document.getElementById('weather');
    const iconw = document.getElementById('img');
    const cit = document.getElementById('city');
    const country = document.getElementById('country');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');

    const desc = document.getElementById('desc');
    const inputCity = document.getElementById('inputCity');
    const submitBtn = document.getElementById('submitBtn');
    

    submitBtn.addEventListener('click', () => {
        
        const city = inputCity.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const icn = data.weather[0].icon;
                const dateSunrise = new Date(data.sys.sunrise * 1000);
                const timeSunrise = `${dateSunrise.getHours()}:${dateSunrise.getMinutes()}:${dateSunrise.getSeconds()}`;
                const dateSunset = new Date(data.sys.sunset * 1000);
                const timeSunset = `${dateSunset.getHours()}:${dateSunset.getMinutes()}:${dateSunset.getSeconds()}`;

                cit.innerText = data.name;
                country.innerText = "Country: " + `${data.sys.country}`;
                sunrise.innerText = "Sunrise in: " + `${timeSunrise}`;
                sunset.innerText = "Sunset in: " + `${timeSunset}`;

                iconw.src = `https://openweathermap.org/img/wn/${icn}.png`;
                weatherElement.innerHTML = `Current temperature: ${temperature}°C`;
                desc.innerText = `Description: ${description}`;
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
    });
});