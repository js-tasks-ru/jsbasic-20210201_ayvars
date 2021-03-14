function getMinMax(str) {
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
}
