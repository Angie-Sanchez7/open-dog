const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

 
                                                
                                                      //   .classList.toggle(clase)  me quita y agrega la clas
 open.addEventListener('click',() => {
      container.classList.add('show-nav')
});
close.addEventListener('click',() => {
    container.classList.remove('show-nav')
});



