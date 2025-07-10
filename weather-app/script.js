const button = document.getElementById("SearchButton")
const input = document.getElementById("city")
const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")

async function getData(cityName)  {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=cbf4aea8d1fe4e8b9ff123659251007&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async()=>{
    const value =input.value; //gives value entered by user
    const result = await getData(value);
    cityName.innerText =`${result.location.name},${result.location.region} ,${result.location.country}` ;
    cityTime.innerText =  result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
});

//http://api.weatherapi.com/v1/current.json?key=cbf4aea8d1fe4e8b9ff123659251007&q=London&aqi=yes
