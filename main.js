const api = 'https://api.openweathermap.org/data/2.5/';
const key = 'acc17f2ccc4c2acdc48bf33343e29e5c';

const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('keypress', e=>{
      if(e.keyCode == '13'){
            getResult(searchBar.value)
      }
    })

    const getResult = (cityName) => {
        let query = `${api}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`; 
        //console.log(query);

    fetch(query).then(weather => weather.json()).then(data);
    }

    const data = (result) => {
        let city = document.querySelector('.city');
        city.innerText = `${result.name}, ${result.sys.country}`

        let temp = document.querySelector('.temp');
        temp.innerText = `${Math.round(result.main.temp)}°C`;

        let desc = document.querySelector('.desc');
        desc.innerText = `${result.weather[0].description.substr(0,1).toUpperCase()}${result.weather[0].description.substring(1)}`; 

        let minmax = document.querySelector('.minmax');
        minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
    }



