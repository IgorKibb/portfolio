const btnMobile = document.getElementById('btn-mobile');

function toggleMenu (event){
   if(event.type === 'touchstart')event.preventDefault();
   const menuResponsivo = document.getElementById('menuResponsivo');
   menuResponsivo.classList.toggle('active'); //Toggle siginifica add caso não tenha e remover caso tenha.
   const active = menuResponsivo.classList.contains('active');
   event.currentTarget.setAttribute('aria-expanded', active);
   

   if(active){
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
   }else{
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
   };
      

};

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);