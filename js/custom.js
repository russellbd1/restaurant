$(document).ready(function () {

    $('.banner_slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5500,
        smartSpeed: 1500,
        navText: ['<i class="fa-sharp fa-solid fa-arrow-right"></i> ', '<i class="fa-sharp fa-solid fa-arrow-left"></i>'],
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    var shapers = $(window);
   


    /* menu fix js */
    shapers.on('scroll', function () {
        if (shapers.scrollTop() > 400) {
            $('.navbar_part').addClass('animated slideInDown fix')
        } else {
            $('.navbar_part').removeClass('animated slideInDown fix')
        }
    });
/*manue_part start*/
        var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

/*manue_part end*/



$('.clints_slider').owlCarousel({
  loop: true,
  slideBy: 1,
  margin: 10,
  center:true,
  nav: true,
  dots: true,
  navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1
      },
      768: {
          items: 2
      },
      1000: {
          items: 3
      },
      1200: {
          items: 3
      }
  }
  
});


















});
