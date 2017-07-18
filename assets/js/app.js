var boton = document.getElementsByClassName("button");
var reproductor = document.getElementById("music");
var audio = document.getElementById("audio");
var song = document.getElementsByClassName("letra");

var music = ["assets/audio/Despacito.mp3","assets/audio/Taylor.mp3", "assets/audio/Bonito.mp3", "assets/audio/Bruno Mars.mp3",
            "assets/audio/Charlie Puth.mp3", "assets/audio/shapeofyou.mp3"];
function playLoad(elemento) {
  reproductor.setAttribute("src",elemento);
  audio.load();
  audio.play();
}
boton[0].addEventListener("click", function () {
  playLoad(music[0]);
})
boton[1].addEventListener("click", function () {
  playLoad(music[1]);
})
boton[2].addEventListener("click", function () {
  playLoad(music[2]);
})
boton[3].addEventListener("click", function () {
  playLoad(music[3]);
})
boton[4].addEventListener("click", function () {
  playLoad(music[4]);
})
boton[5].addEventListener("click", function () {
  playLoad(music[5]);
})
var sonido = false;
var btnPause = document.getElementsByClassName("pause");
function pause (e) {
  if (!sonido) {
    audio.pause();
    e.target.classList.remove("glyphicon-pause");
    e.target.classList.add("glyphicon-play");
    sonido = true;
  } else {
    audio.play();
    e.target.classList.add("glyphicon-pause");
    e.target.classList.remove("glyphicon-play");
    sonido = false;
  }
}

for (var i = 0; i < btnPause.length; i++) {
  btnPause[i].addEventListener("click", function (e) {
    pause(e);
  })
}

var heart = document.getElementsByClassName("badget");
for (var i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function (e) {
    e.target.classList.toggle("icon-heart");
    e.target.classList.toggle("glyphicon-heart");
  })
}

$('.menu').click(function(e){
  e.preventDefault();
  $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});
