const items = [[1,2,3],[4,5,6]]


function findsix() {
  let hasSix = "no!"
  i.forEach(a => {
    a.forEach(l => {
      if (l === 6) {
        hasSix = "yes!"
      }
    })
  })
  
  return hasSix
}


console.log(findsix(items)) // yes!
