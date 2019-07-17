const getLocation = async () => {
  const response = await fetch(`http://ipinfo.io/json?token=11eff2b7f771a7`)

  if (response.status === 200) {
    const data = await response.json()
    return data
  } else {
    throw new Error(`Error`)
  }
}

const  getCountry = async (countryCode) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/all`)

  if (response.status === 200) {
    const data = await response.json()
    return data.find(country => country.alpha2Code === countryCode)
  } else {
    throw new Error(`Error`)
  }
}

const getCountryLocation = async () => {
  const location = await getLocation()
  const country = await getCountry(location.country)

  return {
    city: location.city,
    region: location.region,
    country: country.name,
  }
}

getCountryLocation()
  .then(data => {
    console.log(`Async Await is fun! You are currently in ${data.city}, ${data.region}, ${data.country}`)
  })
  .catch(err => {
    console.log(err)
  })