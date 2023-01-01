fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const countryDetails = {
        ...element,
        name: element.name.common,
        capital: element.capital,
        flag: element.flags.png,
        latlng: element.capitalInfo.latlng,
        region: element.region,
        countrycode: element.cca3,
      };
      country(countryDetails);
    });
  })
  .catch((err) => console.log(err));

function country({ name, capital, flag, latlng, region, countrycode }) {
  document.body.innerHTML += `
    <div class="container">
      <img src="${flag}" alt="${name}" class="flag" />
      <div class ="info">
      <h2>${name}</h2>
      <p><span>Capital : </span>${capital}</p>
      <p><span>Region : </span>${region}</p>
      <p><span>Countrycode : </span>${countrycode}</p>
      <button class="button"><span>Click for Weather</span></button>
    </div>
    `;
}
