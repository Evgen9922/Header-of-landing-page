(()=>{

  const MAP_LINK = document.querySelector('.js-header-mapLink');
  const HEADER_MAP = document.querySelector('.js-header-map');
  const CLOSE_BTN = document.querySelector('.js-close-btn')
  
  MAP_LINK.addEventListener('click', ()=>{
    HEADER_MAP.classList.toggle('js-show-big-map');
  
  })

  CLOSE_BTN.addEventListener('click', ()=>{
    HEADER_MAP.classList.remove('js-show-big-map');
  })



})();