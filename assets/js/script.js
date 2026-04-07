AOS.init({
  offset: 140,
  once: true,
  duration: 800,
});

document.addEventListener("DOMContentLoaded", function() {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.pointerEvents = 'none';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 3000);
});

var getHamburgerIcon = document.getElementById("hamburger");
var getHamburgerCrossIcon = document.getElementById("hamburger-cross");
var getMobileMenu = document.getElementById("mobile-menu");

getHamburgerIcon.addEventListener("click", function () {
  getMobileMenu.style.transform = "translateX(0%)";
});

function closeMenu() {
  if (document.dir === 'rtl') {
    getMobileMenu.style.transform = "translateX(100%)";
  } else {
    getMobileMenu.style.transform = "translateX(-100%)";
  }
}

getHamburgerCrossIcon.addEventListener("click", closeMenu);

document.addEventListener("click", function(event) {
  var isClickInsideMenu = getMobileMenu.contains(event.target);
  var isClickOnIcon = getHamburgerIcon.contains(event.target);
  if (!isClickInsideMenu && !isClickOnIcon) {
    closeMenu();
  }
});

const searchBtn = document.getElementById("searchBtn");
const searchBtnMobile = document.getElementById("searchBtnMobile");
const closeBtn = document.getElementById("search-close-btn");
const searchCon = document.getElementById("search-container");

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchCon.classList.add("show");
});

searchBtnMobile.addEventListener("click", (event) => {
  event.preventDefault();
  searchCon.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  searchCon.classList.remove("show");
});

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
      { breakpoint: 991, settings: { slidesToShow: 5 } },
      { breakpoint: 990, settings: { slidesToShow: 1, arrows: true } }
    ]
  });
}

if ($('#our-menus').length) {
  $('#our-menus').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var $nextSlide = $(slick.$slides[nextSlide]);
    $nextSlide.css({ 'transform': 'translateY(10%)', 'opacity': 0 });
    setTimeout(function() {
      $nextSlide.css({
        'transform': 'translateY(0)',
        'opacity': 1,
        'transition': 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
      });
    }, 50);
  });
}

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
      { breakpoint: 990, settings: { slidesToShow: 1 } }
    ]
  });
}

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
      { breakpoint: 768, settings: { slidesToShow: 2 } }
    ]
  });
}

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
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
}

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
      { breakpoint: 786, settings: { slidesToShow: 1.7, slidesToScroll: 1 } }
    ]
  });
}

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

const copyrightElement = document.getElementById('copyrightCurrentYear');
if (copyrightElement) {
  copyrightElement.textContent = new Date().getFullYear();
}

var shoppingbtn = document.getElementById('shoppingbutton');
var shoppingbtnMobile = document.getElementById('shoppingbuttonMobile');
var shoppingCart = document.querySelector('.shopping-cart');
var cartClose = document.querySelectorAll('.shopping-cart-header > i');

function openCart() {
  if (document.dir === 'rtl') {
    shoppingCart.style.left = "0";
    shoppingCart.style.right = "auto";
  } else {
    shoppingCart.style.right = "0";
  }
}

function closeCart() {
  if (document.dir === 'rtl') {
    shoppingCart.style.left = "-100vw";
  } else {
    shoppingCart.style.right = "-100vw";
  }
}

if (shoppingbtn) shoppingbtn.addEventListener('click', e => { e.preventDefault(); openCart(); });
if (shoppingbtnMobile) shoppingbtnMobile.addEventListener('click', e => { e.preventDefault(); openCart(); });
if (cartClose.length) cartClose.forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); closeCart(); }));

document.querySelectorAll('.shopping-cart-counter .fa-plus').forEach(function(plusBtn) {
  plusBtn.addEventListener('click', function() {
    var span = this.parentElement.querySelector('span');
    if (span) {
      span.textContent = parseInt(span.textContent) + 1;
      updateCartTotal();
    }
  });
});

document.querySelectorAll('.shopping-cart-counter .fa-minus').forEach(function(minusBtn) {
  minusBtn.addEventListener('click', function() {
    var span = this.parentElement.querySelector('span');
    if (span && parseInt(span.textContent) > 1) {
      span.textContent = parseInt(span.textContent) - 1;
      updateCartTotal();
    }
  });
});

function updateCartTotal() {
  var total = 0;
  document.querySelectorAll('.shopping-cart-item').forEach(function(item) {
    var priceEl = item.querySelector('.item-price p') || item.querySelector('.item-price');
    var quantity = parseInt(item.querySelector('.shopping-cart-counter span')?.textContent || 1);
    if (priceEl) {
      var price = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
      if (!isNaN(price)) total += price * quantity;
    }
  });
  var totalElement = document.querySelector('.footet-total-price');
  if (totalElement) totalElement.textContent = total.toLocaleString() + ' MAD';
}

var backToTop = document.getElementById('back-to-top');
if (backToTop) {
  backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
