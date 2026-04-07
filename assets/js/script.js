AOS.init({
  offset: '140',
});

document.addEventListener("DOMContentLoaded", function() {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.display = 'none';
  }, 3000);
});

// Header functionality
var getHamburgerIcon = document.getElementById("hamburger");
var getHamburgerCrossIcon = document.getElementById("hamburger-cross");
var getMobileMenu = document.getElementById("mobile-menu");

// Open the mobile menu
getHamburgerIcon.addEventListener("click", function () {
    getMobileMenu.style.transform = "translateX(0%)";
});

// Close the mobile menu
function closeMenu() {
    getMobileMenu.style.transform = "translateX(-100%)";
}

// Close the mobile menu when the close icon is clicked
getHamburgerCrossIcon.addEventListener("click", closeMenu);

// Close the mobile menu if clicking outside of it
document.addEventListener("click", function(event) {
    var isClickInsideMenu = getMobileMenu.contains(event.target);
    var isClickOnIcon = getHamburgerIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
        closeMenu();
    }
});

// Search bar functionality
const searchBtn = document.getElementById("searchBtn");
const searchBtnMobile = document.getElementById("searchBtnMobile");
const closeBtn = document.getElementById("search-close-btn");
const searchCon = document.getElementById("search-container");

// Show search container when search button is clicked
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchCon.classList.remove("d-none");
  requestAnimationFrame(() => {
    searchCon.classList.add("show");
  });
});

// Show search container when mobile search button is clicked
searchBtnMobile.addEventListener("click", (event) => {
  event.preventDefault();
  searchCon.classList.remove("d-none");
  requestAnimationFrame(() => {
    searchCon.classList.add("show");
  });
});

// Hide search container when close button is clicked
closeBtn.addEventListener("click", () => {
  searchCon.classList.remove("show");
  setTimeout(() => {
    searchCon.classList.add("d-none");
  }, 500);
});

// Header scroll behavior
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const headerClass = document.querySelector('.header');

  const checkScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
      if (headerClass) {
        headerClass.classList.remove('my-3');
        headerClass.classList.add('my-2');
      }
      sessionStorage.setItem('scrolled', 'true');
    } else {
      header.classList.remove('scrolled');
      if (headerClass) {
        headerClass.classList.add('my-3');
        headerClass.classList.remove('my-2');
      }
      sessionStorage.removeItem('scrolled');
    }
  };

  if (sessionStorage.getItem('scrolled') === 'true') {
    header.classList.add('scrolled');
  }
  window.addEventListener('scroll', checkScroll);  
  checkScroll();
});

// Slider initialization

// Our Menu Slider
if ($('#our-menus').length) {
  $('#our-menus').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 300,
    asNavFor: '.slider-indicators-wrapper',
    draggable: false,
    swipe: false,
  });
}

// Navigation Slider for Our Menu
if ($('.slider-indicators-wrapper').length) {
  $('.slider-indicators-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '#our-menus',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    draggable: false,
    swipe: false,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          arrows: true,
        }
      }
    ]
  });
}

// Custom animation for Our Menu slider
if ($('#our-menus').length) {
  $('#our-menus').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var $nextSlide = $(slick.$slides[nextSlide]);
    
    $nextSlide.css({
      'transform': 'translateY(10%)',
      'opacity': 0,
    });

    setTimeout(function() {
      $nextSlide.css({
        'transform': 'translateY(0)',
        'opacity': 1,
        'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
      });
    }, 50); 
  });
}

// Testimonials Slider
if ($('.testimonials .slider-content').length) {
  $('.testimonials .slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    speed: 300,
    asNavFor: '.testimonials .slider-nav',
    draggable: true,
    swipe: true,
  });
}

// Navigation Slider for Testimonials
if ($('.testimonials .slider-nav').length) {
  $('.testimonials .slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testimonials .slider-content',
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0px',
    draggable: true,
    swipe: true,
    arrows: false,
    infinite: true,
  });
}

// Our Chefs Slider
if ($('.our-chefs .our-chef-slider-wrapper').length) {
  $('.our-chefs .our-chef-slider-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '0px',
    fade: false,
    speed: 300,
    draggable: false,
    swipe: false,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
}

// Story Slider
if ($('.story-content').length) {
  $('.story-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    speed: 300,
    asNavFor: '.story-indicators .row',
    draggable: true,
    swipe: true,
  });
}

// Navigation Slider for Story
if ($('.story-indicators > .row').length) {
  $('.story-indicators > .row').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.story-content',
    dots: false,
    focusOnSelect: true,
    centerPadding: '0px',
    draggable: true,
    swipe: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
}

// Partner Slider
if ($('.partner-slider').length) {
  $('.partner-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    speed: 300,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
}

// Chef Choice Slider
if ($('.chef-choise-slider').length) {
  $('.chef-choise-slider').slick({
    slidesToShow: 3,
    vertical: true,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    speed: 300,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        }
      }
    ]
  });
}

// Add click events for the chevron icons
if ($('.chef-choise-icons .fa-chevron-up').length) {
  $('.chef-choise-icons .fa-chevron-up').on('click', function() {
    $('.chef-choise-slider').slick('slickPrev');
  });
}

if ($('.chef-choise-icons .fa-chevron-down').length) {
  $('.chef-choise-icons .fa-chevron-down').on('click', function() {
    $('.chef-choise-slider').slick('slickNext');
  });
}

// Update copyright year
const copyrightElement = document.getElementById('copyrightCurrentYear');
if (copyrightElement) {
  copyrightElement.textContent = new Date().getFullYear();
}

// Shopping cart functionality
var shoppingbtn = document.getElementById('shoppingbutton');
var shoppingbtnMobile = document.getElementById('shoppingbuttonMobile');
var shoppingCart = document.querySelector('.shopping-cart');
var cartClose = document.querySelectorAll('.shopping-cart-header > i');

if (shoppingbtn) {
  shoppingbtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (shoppingCart) {
      shoppingCart.style.right = "0";
    }
  });
}

if (shoppingbtnMobile) {
  shoppingbtnMobile.addEventListener('click', function(event) {
    event.preventDefault();
    if (shoppingCart) {
      shoppingCart.style.right = "0";
    }
  });
}

if (cartClose.length) {
  cartClose.forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function(event) {
      event.preventDefault();
      if (shoppingCart) {
        shoppingCart.style.right = "-100vw";
      }
    });
  });
}

// Shopping cart counter functionality (plus/minus buttons)
document.querySelectorAll('.shopping-cart-counter .fa-plus').forEach(function(plusBtn) {
  plusBtn.addEventListener('click', function() {
    var span = this.parentElement.querySelector('span');
    if (span) {
      var currentValue = parseInt(span.textContent);
      span.textContent = currentValue + 1;
      updateCartTotal();
    }
  });
});

document.querySelectorAll('.shopping-cart-counter .fa-minus').forEach(function(minusBtn) {
  minusBtn.addEventListener('click', function() {
    var span = this.parentElement.querySelector('span');
    if (span) {
      var currentValue = parseInt(span.textContent);
      if (currentValue > 1) {
        span.textContent = currentValue - 1;
        updateCartTotal();
      }
    }
  });
});

// Function to update cart total
function updateCartTotal() {
  var total = 0;
  document.querySelectorAll('.shopping-cart-item').forEach(function(item) {
    var priceText = item.querySelector('.item-price p')?.textContent || 
                    item.querySelector('.item-price')?.textContent;
    var quantity = parseInt(item.querySelector('.shopping-cart-counter span')?.textContent || 1);
    
    if (priceText) {
      var price = parseFloat(priceText.replace('MAD', '').trim());
      if (!isNaN(price)) {
        total += price * quantity;
      }
    }
  });
  
  var totalElement = document.querySelector('.footet-total-price');
  if (totalElement) {
    totalElement.textContent = total + ' MAD';
  }
}

// Fix for RTL layout with shopping cart
if (document.dir === 'rtl') {
  if (shoppingCart) {
    shoppingCart.style.right = "auto";
    shoppingCart.style.left = "-100vw";
  }
  
  if (shoppingbtn || shoppingbtnMobile) {
    var originalOpenHandler = function(event) {
      event.preventDefault();
      if (shoppingCart) {
        shoppingCart.style.left = "0";
      }
    };
    
    if (shoppingbtn) {
      shoppingbtn.removeEventListener('click', shoppingbtn._listener);
      shoppingbtn.addEventListener('click', originalOpenHandler);
      shoppingbtn._listener = originalOpenHandler;
    }
    
    if (shoppingbtnMobile) {
      shoppingbtnMobile.removeEventListener('click', shoppingbtnMobile._listener);
      shoppingbtnMobile.addEventListener('click', originalOpenHandler);
      shoppingbtnMobile._listener = originalOpenHandler;
    }
  }
  
  if (cartClose.length) {
    cartClose.forEach(function(closeBtn) {
      closeBtn.removeEventListener('click', closeBtn._listener);
      var closeHandler = function(event) {
        event.preventDefault();
        if (shoppingCart) {
          shoppingCart.style.left = "-100vw";
        }
      };
      closeBtn.addEventListener('click', closeHandler);
      closeBtn._listener = closeHandler;
    });
  }
}

// Back to top button smooth scroll
var backToTop = document.getElementById('back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}