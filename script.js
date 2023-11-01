// propaganda

function mostrarPopup() {
    popup.style.display = 'flex';
}

function fecharPopup() {
    popup.style.display = 'none';
}

setTimeout(mostrarPopup, 15000);


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
  
  const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')
  
  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })


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


