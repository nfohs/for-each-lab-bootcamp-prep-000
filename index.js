//var test = ["a", "b", "c"]

function iterativeLog(array){
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

//iterativeLog(test)

function iterate(callback) {
  var internalArray = [""]
  internalArray.forEach(callback)
  return internalArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
