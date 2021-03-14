function camelize(str) {
<<<<<<< HEAD
  let arr = str.split('-');
  newArr = arr.map(function (word, index) {
    if (index > 0) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
    } 
    return word;
  }  )
  let newStr = newArr.join('');
  return newStr;
}
=======
  // ваш код...
}
>>>>>>> d6949cf5b2cd4b0b3929bff3a873b230d67f1042
