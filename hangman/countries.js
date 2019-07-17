const countryCode = `DE`
const countryEl = document.querySelector(`#country`)

const request = new XMLHttpRequest()

request.open(`GET`, `https://restcountries.eu/rest/v2/all`)
request.send()

request.addEventListener(`readystatechange`, (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const countries = JSON.parse(e.target.responseText)
    const country = countries.find((country) => country.alpha2Code === countryCode)
    console.log(country)
    countryEl.textContent = country.name
  } else if (e.target.readyState === 4) {
    console.log(`An eeror has occured`)
  }
})

// Callback pattern
const getCountry = (callback) => (countryCode) => {
  const request = new XMLHttpRequest()

  request.open(`GET`, `https://restcountries.eu/rest/v2/all`)
  request.send()

  request.addEventListener(`readystatechange`, (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const countries = JSON.parse(e.target.responseText)
      const country = countries.find((country) => country.alpha2Code === countryCode)
      callback(undefined, country)
    } else if (e.target.readyState === 4) {
      callback(`An error has taken place`, undefined)
    }
  })
}

getCountry((error, data) => {
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
})(countryCode)

// Promise
const getCountryUsingPromise = (countryCode) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.open(`GET`, `https://restcountries.eu/rest/v2/all`)
  request.send()

  request.addEventListener(`readystatechange`, (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const countries = JSON.parse(e.target.responseText)
      const country = countries.find((country) => country.alpha2Code === countryCode)
      resolve(country)
    } else if (e.target.readyState === 4) {
      reject(`Error occured`)
    }
  })
})

getCountryUsingPromise(countryCode)
  .then((data) => {
    console.log(`hello`, data.name)
  })
  .catch((err) => {
    console.log(err)
  })