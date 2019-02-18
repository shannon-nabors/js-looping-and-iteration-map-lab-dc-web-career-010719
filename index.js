
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

// function nameToAttributes(drivers) {
//   return drivers.map(driver => {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]})
// }

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const driverFirstName = driver.split(" ")[0]
    const driverLastName = driver.split(" ")[1]
    return {firstName: driverFirstName, lastName: driverLastName}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
