let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

let getWeather = () => {
    let cityValue = cityRef.value;
    // if input field is empty
    if (cityValue.length == 0) {
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    }
    // if field is NOT empty 
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=56cf75a78e6c9f71c08ebce949a3cb27&units=metric`;
        // clear input field 
        cityRef.value = "";
        fetch(url)
            .then((resp) => resp.json())
            // if city name is valid 
            .then((data) => {
                console.log(data);
                console.log(data.weather[0].icon);
                console.log(data.weather[0].main);
                console.log(data.weather[0].description);
                console.log(data.name);
                console.log(data.main.temp_min);
                console.log(data.main.temp_max);
                result.innerHTML = `<h2>${data.name}</h2>
                    <h4 class="weather">${data.weather[0].main}</h4>
                    <h4 class="description">${data.weather[0].description}</h4>
                    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                    <h1>${data.main.temp} &#176;</h1>
                    <div class="temp-container">
                        <div>
                            <h4 class="title">min</h4>
                            <h4 class="temp">${data.main.temp_min}&#176;</h4>
                        </div>
                        <div>
                            <h4 class="title">max</h4>
                            <h4 class="temp">${data.main.temp_max}&#176;</h4>
                        </div>
                    </div>
                `;
            })
            // if city name is NOT valid 
            .catch(() => {
                result.innerHTML = `<h3 class="msg">City not found</h3>`;
            });
    }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
