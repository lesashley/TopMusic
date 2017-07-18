var endScroll = 0;
window.addEventListener("scroll", function () {
  var nav = document.getElementById("js-nav");
  var scroll = window.pageYOffset || document.body.scrollTop;
  var noticias = document.getElementById("noticias");
  var musica= document.getElementById("musica");
  // var contact = document.getElementById("con");
  console.log(scroll);
  if (scroll > endScroll) {
    nav.classList.add("navbar-scroll");
    // nav.classList.add("logo-render");
  }
  else{
    nav.classList.remove("navbar-scroll");
  }
})
var fotos = 0;
function slideHome(){
    var slides = document.getElementsByClassName("galeria-slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";}
    fotos++;
    if (fotos > slides.length){
      fotos = 1;}
    slides[fotos-1].style.display = "block";
    setTimeout(slideHome, 3000);
}
window.addEventListener("load",function(){
  slideHome();
});
