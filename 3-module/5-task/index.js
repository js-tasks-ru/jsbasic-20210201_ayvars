function getMinMax(str) {
<<<<<<< HEAD
  let obj = {
    min:0, 
    max: 0
  };
    
    
  let newArr = str.split(/,\s*/).join(' ').split(' ');
    let result = newArr.filter(item => {
      if(isNaN(item) == false){
      return +item
      }
    })
    
  obj.max = Math.max(...result)
  obj.min = Math.min(...result)
  return obj
=======
  // ваш код...
>>>>>>> d6949cf5b2cd4b0b3929bff3a873b230d67f1042
}
