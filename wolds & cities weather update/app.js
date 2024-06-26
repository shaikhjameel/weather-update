var getDiv = document.getElementById("show")
var getinp = document.getElementById("inp")
function search(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getinp.value}&units=metric&appid=321d80007719422366a886ca1150aa80`)
.then((data)=>{
    return data.json()
})
.then((data)=>{
    console.log(data);
    getDiv.innerHTML = `
<div class="container">
  <div class="card-body text-center text-dark"><br />
    <h2 class="card-text">${data.name}</h2><br />
    <h3 class="card-text">temperature: ${Math.round(data.main.temp)}°C</h3><br />
    <h3 class="card-text">feels like: ${Math.round(data.main.feels_like)}°C</h3><br />
    <h3 class="card-text">humidity: ${Math.round(data.main.humidity)}%</h3><br />
    <h3 class="card-text">Atmosphere: ${data.weather[0].description}</h3><br /><br />
</div>    
`
})
.catch((error)=>{
    console.log(error);
})
}


