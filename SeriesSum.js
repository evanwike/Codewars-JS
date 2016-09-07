function SeriesSum(n){
  let sum = n > 0 ? 1 : 0, denom = 4;
  for(let i = 1; i < n; i++){
    sum += 1 / denom;
    denom += 3
  }
  return sum.toFixed(2)
}



// - Test Cases -
SeriesSum(1)// "1.00")
SeriesSum(2)// "1.25")
SeriesSum(3)// "1.39")
SeriesSum(4)// "1.49")
