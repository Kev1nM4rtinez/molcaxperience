$(window).on('scroll', function() {
  var scrolled = $(this).scrollTop();
  $('.efecto1').css({
    'transform': 'translate3d(0, ' + (scrolled * .20) + 'px, 0)',
    'opacity': 1 - scrolled / 400
  });
});

// Inicializa ScrollReveal.js
ScrollReveal().reveal('.titulo-seccion', {
  origin: 'left',
  distance: '200px',
  duration: 2000,
  easing: 'ease',
  reset: true,
  viewFactor: 0.3
});

///// testimonios /////
// Esperar a que el DOM esté completamente cargado
$(document).ready(function () {
  // Inicializa el primer testimonio
  actualizarTestimonio();

  // Cambiar los testimonios automáticamente cada 5 segundos
  setInterval(siguiente, 5000);
});

//// testimonios /////
const testimonios = [
  {
    foto: "cliente1.jpeg",
    titulo: "Excelente trabajo!!",
    texto: "Voluptatibus quasi autem voluptatum exercitationem, hic esse temporibus vel minima sint natus debitis veritatis accusantium? Ab atque quas sint sapiente itaque totam?",
  },
  {
    foto: "cliente2.webp",
    titulo: "Cumpliendo siempre a tiempo.",
    texto: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quasi autem voluptatum exercitationem, hic esse temporibus",
  },
  {
    foto: "cliente3.jpeg",
    titulo: "Trabajos de excelente calidad",
    texto: "hic esse temporibus vel minima sint natus debitis veritatis accusantium? Ab atque quas sint sapiente itaque totam.",
  },
  {
    foto: "cliente4.webp",
    titulo: "Calidad garantizada",
    texto: "hic esse temporibus vel minima sint natus debitis veritatis accusantium? Ab atque quas sint sapiente itaque totam.",
  },
];

var pos = 0;

function actualizarTestimonio() {
  document.getElementById("imgCliente").src = "img/" + testimonios[pos].foto;
  document.getElementById("tituloCliente").innerText = testimonios[pos].titulo;
  document.getElementById("txtCliente").innerText = testimonios[pos].texto;
}

function siguiente() {
  pos++;
  if (pos >= testimonios.length) {
    pos = 0; // Reiniciar cuando llegue al final
  }
  actualizarTestimonio();
}
