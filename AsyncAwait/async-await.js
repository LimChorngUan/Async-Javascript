const getMultipleByTwo = (num) => new Promise((resolve, reject) => {
  setTimeout(() => {
    typeof num === `number` ? resolve(num * 2) : reject(`Number must be provided`)
  }, 1000)
})

const getFinalAnswer = async (num) => {
  let data = await getMultipleByTwo(num)
  data = await getMultipleByTwo(data)
  data = await getMultipleByTwo(data)

  return data
}

getFinalAnswer(2)
  .then(data => {console.log(data)})
  .catch(err => {console.log(err)})