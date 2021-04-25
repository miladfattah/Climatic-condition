window.addEventListener('load' , function(){
    let long ;
    let lat ; 


    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let locationIcon = document.querySelector('.location-icon');


    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position=>{
        long = position.coords.longitude;
        lat = position.coords.latitude;
  
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=21c72db833fc4d54fa6b0c89990e633d`;

        fetch(api)
        .then(response => {

            return response.json();
        })
        .then(data=>{
                    const {
                        feels_like
                    } = data.main;
        
                    const {
                        description
                    } = data.weather[0];
        
                    const {
                        icon
                    } = data.weather[0];
        
                    // const icn = `http://openweathermap.org/img/wn//${icon}@2x.png`;
        
                    //Set DOM elements from the API
                    temperatureDegree.textContent = feels_like;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = data.name;
                    locationIcon.innerHTML = `<img src="http://openweathermap.org/img/wn//${icon}@2x.png">`;
                    // locationIcon.textContent = icn;
        
        })
     

    })
    }
})

