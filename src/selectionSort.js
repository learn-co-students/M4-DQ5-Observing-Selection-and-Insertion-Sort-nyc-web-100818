function selectionSort(arr) {
  let spread = arr.length
  let newArray = []
  for (let i = 0; i < spread; i++) {
    console.log(i)
    let counter = 1000
    for (let j = 0; j< arr.length; j++) {
       if (arr[j] < counter) {
        counter = arr[j]
      }
    }
   newArray.push(counter)
  arr.splice(arr.indexOf(counter), 1)
  }
  return newArray
}
