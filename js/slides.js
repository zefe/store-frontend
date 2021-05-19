$('.products__container').slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3,
  prevArrow: '<img src="./assets/icons/next-icon.svg" class="prev__arrow">',
  nextArrow: '<img src="./assets/icons/previous-icon.svg" class="next__arrow">',  
  customPaging: function(slider, i) {
      return '<span><img src="./assets/images/slide-dot.png" /><img src="./assets/images/slide-dot-active.png" /></span>';
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
		