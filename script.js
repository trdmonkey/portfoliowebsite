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






  // QUESTION: Add sticky class if scrolled
  // IMPORTANT: skills round circle svg
  //Portfolio gallery
  // FORM VALIDATION
  // THEME PRIMARY COLOR SETTINGS
  // DARK MODE
});



