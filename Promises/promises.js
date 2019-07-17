// Callback
const getData = (callback) => {
  setTimeout(() => {
    callback(undefined, `Resolved`)
    // callback(`Rejected`, undefined)
  }, 2000)
}

getData((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

// Callback chaining
const getMultipleByTwo = (num, callback) => {
  setTimeout(() => {
    if (typeof num === `number`) {
      callback(undefined, num * 2)
    } else {
      callback(`Number must be provided`, undefined)
    }
  }, 2000)
}

getMultipleByTwo(3, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    getMultipleByTwo(data, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }
})

// Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(`Promise resolved`)
    reject(`Promise rejected`)
  }, 2000)
})

myPromise.then(
  (data) => {console.log(data)},
  (err) => {console.log(err)}
)

// Promise Chaining
const getMultipleByTwoUsingPromise = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === `number` ? resolve(num * 2) : reject(`Number must be provided`)
  }, 2000)
})

getMultipleByTwoUsingPromise(10)
  .then((data) => {
    return getMultipleByTwoUsingPromise(data)
  })
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })