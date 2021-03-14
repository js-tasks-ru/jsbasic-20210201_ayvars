let arr = [5, 3, 8, 1];


function filterRange(arr, a, b) {
  let newArr = arr.filter(number => number >= a && number <= b)
  return newArr;

}