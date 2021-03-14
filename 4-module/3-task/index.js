function highlight(table) {
  
  for(i = 0; i <table.rows.length; i++){

    let row = table.rows;

    let statusNumberInArr = table.rows[i].cells.length -1;
    let genderNumberInArr = table.rows[i].cells.length -2;
    let ageNumberInArr = table.rows[i].cells.length -3;

    let statusCells = table.rows[i].cells[statusNumberInArr];
    let genderCells = table.rows[i].cells[genderNumberInArr];
    let ageCells = table.rows[i].cells[ageNumberInArr];

    
    if(statusCells.hasAttribute('data-available') && statusCells.getAttribute('data-available') == 'false'){
      row[i].classList.add('unavailable');
    }
    else if(statusCells.hasAttribute('data-available') && statusCells.getAttribute('data-available') == 'true'){
      row[i].classList.add('available');
    }

   else{
     row[i].setAttribute('hidden', '');
   }

   if(genderCells.innerHTML == 'm'){
     row[i].classList.add('male');
   }
   else{
    row[i].classList.add('female');
   }

   if(ageCells.innerHTML < '18'){
    row[i].style.textDecoration = "line-through";
   }

  }
}
