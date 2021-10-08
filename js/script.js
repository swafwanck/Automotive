$(document).ready(function(){
    var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {},
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
      });
      wow.init();


    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplaySpeed:1000,
        autoplayTimeout:2000,
        dots:false,
        touchDrag:false,
        mouseDrag:false,
    });
    // image-slider-inited
    window.onscroll = function () {
        headerFunction();
      };

      // var header = document.getElementById("header");
      var body = document.body;
      var sticky = body.offsetTop;

      function headerFunction() {
        if (window.pageYOffset > 150) {
          body.classList.add("sticky");
        } else {
          body.classList.remove("sticky");
        }
      }
})

// hamburger-menu
function showMenu() {
    $("body").toggleClass("active");
}
  
function hideMenu() {
    $("body").removeClass("active");
}