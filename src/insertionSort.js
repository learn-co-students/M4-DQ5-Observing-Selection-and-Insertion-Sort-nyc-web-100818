function insertionSort(arr) {
  let spread = [...arr]
 let newArray = []
 for (let i=0; i < spread.length; i++) {
   let counter = 1000
   for (let j = i; j < spread.length; j++) {
      if (spread[j] < counter) {
        counter = spread[j]
      }
   }
   console.log(counter)
   spread.splice(spread.indexOf(counter), 1)
   if (counter < spread[i]) {
     spread.splice(i, 0, counter)
   }
   else {
     spread.push(counter)
   }
 }
 return spread
}
