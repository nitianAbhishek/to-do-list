

const api = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=a70dad59f68c729651b85235ffc9f7bb';

const inputValue = document.querySelector(".input");


const desc = document.querySelector(".desc");
const windspeed = document.querySelector(".windspeed");
const temp = document.querySelector(".temp");

// form.addEventListener("submit", input);

function input(e){
     e.preventDefault();
     const word = document.querySelector("#inputValue").value;
     console.log(word);
     fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${word}&appid=a70dad59f68c729651b85235ffc9f7bb`
     )
     .then((res)=>{{
      return res.json();
     }})
     .then((data) =>{
      console.log(data);
      var descp = data.weather[0].description;
      var tempt = data.main.temp;
      var windspd = data.wind.speed;

      windspeed.innerHTML = "Windspeed :" +windspd +"km/h";
      desc.innerHTML = descp;
      temp.innerHTML = "Temprature : " +Math.floor((tempt-273.15)) +"oC";


     })

     .catch((err) => {
        console.log(err);
    });
}

inputValue.addEventListener("submit", input);




