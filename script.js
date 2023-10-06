// propaganda

function mostrarPopup() {
    popup.style.display = 'flex';
}

function fecharPopup() {
    popup.style.display = 'none';
}

setTimeout(mostrarPopup, 2000);


$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
  