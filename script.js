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
  hamBur.on("click", function () {
    nav.toggleClass("active");
    hamBur.toggleClass("active");
  });

  // Agregar la clase sticky si se hace scroll
  const header = $("#header");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });

/* Circulos de porcentaje de habilidades */
function makeSVG(percentage, innerText = "") {
  var absPercentage = Math.abs(percentage).toString();
  var percentageStr = percentage.toString();
  var classes = "";
  var svg = 
    '<svg class="circle-chart" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' + 
    '<circle class="circle-chart__background" cx="50" cy="50" r="40" />' + 
    '<circle class="circle-chart__circle ' + 
    classes + 
    '" stroke-dasharray="' + 
    absPercentage + 
    ',100" cx="50" cy="50" r="40" />' + 
    '<g class="circle-chart__info">' + 
    '  <text class="circle-chart__percent" x="50" y="50">' + 
    percentageStr + 
    "%</text>";
  if (innerText) {
    svg +=
      '<text class="circle-chart__subline" x="50" y="60" text-anchor="middle">' +
      innerText +
      "</text>";
  }

  svg += "</g></svg>";
  return svg;
}

(function ($) {
  $.fn.circlechart = function () {
    this.each(function () {
      var $this = $(this);
      var percentage = $this.data("percentage");
      var innerText = $this.text();
      $this.html(makeSVG(percentage, innerText));
    });

    return this;
  };
})(jQuery);

$(function () {
  $(".circlechart").circlechart();
});


  // QUESTION: Add sticky class if scrolled
  // IMPORTANT: skills round circle svg
  //Portfolio gallery
  // FORM VALIDATION
  // THEME PRIMARY COLOR SETTINGS
  // DARK MODE
});
