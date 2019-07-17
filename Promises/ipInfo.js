// 1. Create getLocation function which takes no arguments
// 2. Setup getLocation to make a request to the url and parse the data
// 3. Use getLocation to print the city, region, and country information

const getLocation = () =>
  fetch(`http://ipinfo.io/json?token=11eff2b7f771a7`)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error(`Error`)
      }
    })
    .then(data => data)

const  getCountry = (countryCode) =>
  fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error(`Unable to fetch countries`)
      }
    })
    .then(data => data.find(country => country.alpha2Code === countryCode))

const myLocation = {
  city: undefined,
  region: undefined,
  country: undefined,
}

getLocation()
  .then(({ city, region, country: countryCode }) => {
    myLocation.city = city
    myLocation.region = region
    return getCountry(countryCode)
  })
  .then(country => {
    myLocation.country = country.name
    console.log(`You are currently in ${myLocation.city}, ${myLocation.region}, ${myLocation.country}`)
  })
  .catch(err => {console.log(err)})