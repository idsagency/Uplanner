// 01 Owl Carrusel setup *************************************************
$(document).ready(function() { 
  var owl = $("#owl-demo");
  owl.owlCarousel({
      itemsCustom : [
        [0, 2],
        [450, 3],
        [600, 3],
        [700, 5],
        [1000, 5],
        [1200, 6],
        [1400, 6],
        [1600, 8]
      ],
      navigation : true
  });
});

// 02 Header  *************************************************
$(window).scroll(function() {
if ($(this).scrollTop() > 120){  
    $('.navbar-default').addClass('navbar-default-border');
  } else {
    $('.navbar-default').removeClass('navbar-default-border');
  }
});


//  03 Search Bar slide In and Close *************************************
$("#openSearch").click(function(e) {
    e.preventDefault();
    $('.navbar').toggleClass('navbar-slide');
});

$(document).mouseup(function (e) {
    var container = $(".navbar");
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.removeClass('navbar-slide');
    }
});
