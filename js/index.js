window.addEventListener('scroll',function(){
    let navbar = document.getElementById('navbar') 
   if(window.pageYOffset >= 112)
   {
     navbar.classList.add('sticky') ;
   }
   else
   {
    navbar.classList.remove('sticky') ;
   }
});