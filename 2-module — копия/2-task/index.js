  
/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  
  result = true;

  for(key in obj){
    if(obj.hasOwnProperty(key)){
      result = false;
    }
  }
  return result;
}