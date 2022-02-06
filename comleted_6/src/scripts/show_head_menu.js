(()=>{

  const BURGER = document.querySelector('.burger-menu');
  const MENU = document.querySelector('.header__menu');
  const MENU_ITEM = document.querySelectorAll('.header__menu-item');

  BURGER.addEventListener('click',()=>{
     MENU.classList.toggle('js-header__menu');
  });

  MENU_ITEM.forEach((item)=>{
    item.addEventListener('click', (ev)=>{
      MENU.classList.toggle('js-header__menu');
    })
  })

})();