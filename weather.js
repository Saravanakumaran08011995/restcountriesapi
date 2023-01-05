fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={88de9e24d14e4021d2d192996e095a86}")
.then((response) => response.json())
  .then((data) => {
    console.log(data);
  })