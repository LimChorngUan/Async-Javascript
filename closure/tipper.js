const createTipper = (percentage) => (billingAmount) => percentage * billingAmount

const tip10 = createTipper(0.1)
const tip25 = createTipper(0.25)

const billingAmount = 250
console.log(tip10(billingAmount))
console.log(tip25(billingAmount))