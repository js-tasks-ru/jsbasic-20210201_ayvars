/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

 
function sumSalary(salaries) {
  let result = 0;

  for(item in salaries){
    
    if(typeof(salaries[item]) === 'number' && isFinite(salaries[item]) == true){  
      
      result += salaries[item] 
      
    }
  }

return result;

}


