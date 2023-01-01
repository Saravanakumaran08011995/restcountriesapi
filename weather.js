fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={8f7ee2fffa212f65a112d3206c195e7b}")
.then((response) => response.json())
  .then((data) => {
    console.log(data);
  })