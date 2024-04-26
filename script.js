$(document).ready(function () {
  /* 
    * Mover entrelinea o subrayado 
  */

  const nav = $(".nav-links");
  const links = nav.find("ul a");
  const underline = nav.find(".underline");

  function moveUnderline(event) {
    const link = $(this);
  
    // TODO: Vamos a obtener el ancho del elemento al que se hace click
    const width = link.outerWidth();
    const left = link.position().left;
    
    // Eliminar class=active de un enlace ya activo
    links.removeClass("active");
    
  
    // Agregar active al elemento clickeado
    link.addClass("active");
  
    // Mover el subrayado al elemento activo y establecer el mismo ancho del elemento activo
    underline.css({
      width: `${width}px`,
      left: `${left}px`,
    });
  }


  // TODO: Vamos agregar un detector de eventos para todos los links
  links.on("click", moveUnderline);


  // TODO: MENU HAMBURGUESA   (RESPONSIVE)
  const hamBur = $(".ham-burguer");
  hamBur.on("click", function() {
    nav.toggleClass("active");
    hamBur.toggleClass("active");
  });

  // Agregar la clase sticky si se hace scroll
  const header = $("#header");
  $(window).on("scroll", function() {
    if($(window).scrollTop()>10) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });



  /* Circulos de porcentaje de habilidades */
  function makeSVG(percentage, innerText = "") {
    var absPersentage = Math.abs(percentage).toString();
    var percentageStr = percentage.toString();
    var classes = "";
    var svg = 
    '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg" >' +
    '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />' +
    '<circle class="circle-chart__circle ' + 
    classes + 
    '"' + 
    'stroke-desharrays="' + 
    absPersentage + 
    ',100" cx="16.9" cy="16.9" r="15.9" />' + 
    '<g class="circle-chart__info">' + 
     '  <text class="circle-chart__percent" x="17.9" y="15.5">' + 
      percentageStr + 
      "%</text>";
    

  }

































  // QUESTION: Add sticky class if scrolled
  // IMPORTANT: skills round circle svg
  //Portfolio gallery
  // FORM VALIDATION
  // THEME PRIMARY COLOR SETTINGS
  // DARK MODE
});



