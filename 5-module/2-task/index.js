function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  console.log(text)
  button.addEventListener('click', function(){
    if(text.hasAttribute('hidden') == true){
      text.hidden = false;
    }
    else{
      text.hidden = true;
    }
  })
}
