const getCountry = (countryCode) => fetch(`https://restcountries.eu/rest/v2/all`).then(response => {
  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error(`Unable to fetch countries`)
  }
})
  .then(data => data.find(country => country.alpha2Code === countryCode))

getCountry(`US`)
  .then(country  => {console.log(country .name)})
  .catch(err => {console.log(err)})