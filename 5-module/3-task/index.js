function initCarousel() {
  let carousel = document.querySelector(`.carousel__inner`);
  let buttonNextSlide = document.querySelector(`.carousel__arrow_right`);
  let buttonPrevSlide = document.querySelector(`.carousel__arrow_left`);
  let carouselWidth = carousel.offsetWidth;
  let width = 0;


buttonPrevSlide.style.display = 'none';
buttonNextSlide.addEventListener('click', nextSlide);
buttonPrevSlide.addEventListener('click', prevSlide);

  function nextSlide() {
      width  += carouselWidth;
      carousel.style.transform = 'translateX(-' + width + 'px)';
      checkBtn(width);
    }

    function prevSlide() {
      width  -= carouselWidth;
      carousel.style.transform = 'translateX(-' + width + 'px)';
      checkBtn(width);
      }

      function checkBtn(width){
        if(width <= 0){
          buttonPrevSlide.style.display = 'none';
        }
        else if(width == (carousel.children.length -1) * carouselWidth) {
          buttonNextSlide.style.display = 'none';
        }
        else{
            buttonPrevSlide.style.display = 'block';
            buttonNextSlide.style.display = 'block';
        }
      }
    }

    



