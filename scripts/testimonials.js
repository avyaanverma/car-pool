const btn = document.getElementsByClassName('btn');
  const bgCover = document.querySelector('.slide-row');
  const slide = document.getElementsByClassName('slide-col')

  // console.log("hello");
  btn[0].addEventListener('click', ()=> {
      bgCover.style.transform = `translateX(0rem)`;
      slide[0].style.filter = "blur(0)";
      for (let i = 0; i < slide.length; i++) {
        if(i == 0){
         slide[i].classList.toggle('slide-col-active')
         btn[i].classList.add('active')
        }
        else{
          btn[i].classList.remove('active')
          slide[i].classList.remove('slide-col-active')
        }
      }
    })
    btn[1].addEventListener('click', ()=> {
      bgCover.style.transform = `translateX(-71rem)`;
      slide[1].style.filter = "blur(0)";
      for (let i = 0; i < slide.length; i++) {
        if(i == 1){
         slide[i].classList.toggle('slide-col-active')
         btn[i].classList.add('active')
        }
        else{
          btn[i].classList.remove('active')
          slide[i].classList.remove('slide-col-active')
        }
      }
    })
    
    btn[2].addEventListener('click', ()=> {
      bgCover.style.transform = `translateX(-142rem)`;
  
      for (let i = 0; i < slide.length; i++) {
        if(i == 2){
         slide[i].classList.add('slide-col-active')
         btn[i].classList.add('active')
         
        }
        else{
          btn[i].classList.remove('active')
          slide[i].classList.remove('slide-col-active')
        }
      }
    })


    btn[3].addEventListener('click', ()=> {
      bgCover.style.transform = `translateX(-212rem)`;
  
      for (let i = 0; i < slide.length; i++) {
        if(i == 3){
         slide[i].classList.add('slide-col-active')
         btn[i].classList.add('active')
        }
        else{
          btn[i].classList.remove('active')
          slide[i].classList.remove('slide-col-active')
        }
      }
    })
    

  