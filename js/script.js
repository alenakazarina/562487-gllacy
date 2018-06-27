
var menu = document.getElementById("dropdown-menu");
var toggleMenu = document.getElementById("dropdown-menu-toggle");

toggleMenu.addEventListener("focus", function( event ) {
  if (menu.className === "dropdown-menu flex-column active") {
    menu.className = "dropdown-menu flex-column visually-hidden";
  } else {
      menu.className = "dropdown-menu flex-column active";
  }   
}, true);
toggleMenu.addEventListener("focusout", function( event ) {
  if (menu.className === "dropdown-menu flex-column active") {
    menu.className = "dropdown-menu flex-column visually-hidden";
  } else {
      menu.className = "dropdown-menu flex-column active";
  }   
}, true);

menu.addEventListener("focus", function( event ) {
  menu.className = "dropdown-menu flex-column active";
}, true);
menu.addEventListener("focusout", function( event ) {
  menu.className = "dropdown-menu flex-column visually-hidden";
}, true);

var navLinks = document.getElementsByClassName("site-navigation-link");
var linksBg = document.getElementsByClassName("link-bg");
for (var i=0; i<navLinks.length; i++) {
  navLinks[i].addEventListener('focus', function() {
    this.parentNode.classList.add("focus");
  }, true);
}
for (var i=0; i<navLinks.length; i++) {
  navLinks[i].addEventListener('focusout', function() { 
    this.parentNode.classList.remove("focus");
    if(this.parentNode.classList.contains("active")) {
      this.parentNode.classList.remove("active");
    }
  }, true);
}
for (var i=0; i<navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    this.parentNode.classList.add("active");
  }, true);
}

var search = document.getElementById("search-form");
toggleSearch = document.getElementById("search-toggle");

toggleSearch.addEventListener("focus", function( event ) {
  if (search.className === "search-form active") {
    search.className = "search-form visually-hidden";
  } else {
    	search.className = "search-form active";  
  }   
}, true);
toggleSearch.addEventListener("focusout", function( event ) {
  if (search.className === "search-form active") {
    search.className = "search-form visually-hidden";
  } else {
     	search.className = "search-form active";
  }   
}, true);

search.addEventListener("focus", function( event ) {
  search.className = "search-form active";
}, true);
search.addEventListener("focusout", function( event ) {
  search.className = "search-form visually-hidden";
}, true);


var login = document.getElementById("login-form");
toggleLogin = document.getElementById("login-toggle");

toggleLogin.addEventListener("focus", function( event ) {
  if (login.className === "login-form flex-column active") {
    login.className = "login-form flex-column visually-hidden";
  } else {
    	login.className = "login-form flex-column active";
  }   
}, true);
toggleLogin.addEventListener("focusout", function( event ) {
  if (login.className === "login-form flex-column active") {
    login.className = "login-form flex-column visually-hidden";
  } else {
     	login.className = "login-form flex-column active";
  }   
}, true);

login.addEventListener("focus", function( event ) {
  login.className = "login-form flex-column active";
}, true);
login.addEventListener("focusout", function( event ) {
  login.className = "login-form flex-column visually-hidden";
}, true);


var cart = document.getElementById("cart-form");
var toggleCart = document.getElementById("cart-toggle");

if(cart !== null) {
	toggleCart.addEventListener("focus", function( event ) {
	  if (cart.className === "cart-form flex-column active") {
	    cart.className = "cart-form flex-column visually-hidden";
	  } else {
	    	cart.className = "cart-form flex-column active";
	  }   
	}, true);
}
if(cart !== null) {
	toggleCart.addEventListener("focusout", function( event ) {
	  if (cart.className === "cart-form flex-column active") {
	    cart.className = "cart-form flex-column visually-hidden";
	  } else if (cart.className === "cart-form flex-column active") {
	     	cart.className = "cart-form flex-column active";
	  }   
	}, true);
}
if(cart !== null) {
	cart.addEventListener("focus", function( event ) {
	  cart.className = "cart-form flex-column active";
	}, true);
}
if(cart !== null) {
	cart.addEventListener("focusout", function( event ) {
	  cart.className = "cart-form flex-column visually-hidden";
	}, true);
}

var navItems = document.getElementsByClassName("slide-nav");
var slides = document.getElementsByClassName("product-slide");
var colors = ["#849d8f","#8996a6","#9d8b84"];
var wrapper = document.getElementById("wrapper");
var currentSlide = 0;

function getCurrent() {
  for(var i=0; i<navItems.length; i++) {
    if(navItems[i].className === "slide-nav slide-nav-current") {
      currentSlide = i;
    }
  }
  return currentSlide;
}
function slideChange() {
  var currentImage = getCurrent();
  for(var i=0; i<slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slides[currentImage].style.opacity = 1;
  wrapper.style.backgroundColor = colors[currentImage];
}
for(var i=0; i<navItems.length; i++) {
  navItems[i].addEventListener("click", function( event ) {
    navItems[currentSlide].className = "slide-nav";
    event.target.className = "slide-nav slide-nav-current";
    slideChange(); 
  }, true);
}

var form = document.getElementById('callback-form');
var borderTop = document.getElementById('form-border-top');
var borderLeft = document.getElementById('form-border-left');
var borderBottom = document.getElementById('form-border-bottom');
var borderRight = document.getElementById('form-border-right');

function animate(options) {
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    var progress = options.timing(timeFraction)
    options.draw(progress);
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

if(form !== null) {
	var inputs = document.querySelectorAll(".callback-form .form-input");
  form.addEventListener('submit', function(evt) {
  	var flag = 0;
  	var errorInputs = [];
  	evt.preventDefault();
  	for(var i=0; i < inputs.length; i++) {
  		if(inputs[i].classList.contains('on-error')) {
  			inputs[i].classList.remove('on-error');
  		}
	    if (!inputs[i].value) {
	      errorInputs[flag] = inputs[i];
	      flag++;
	    }
	  }
	  if(!flag) {
	  	form.submit();
	  } else {
	  	for(j=0; j<flag; j++) {
	  		errorInputs[j].classList.add('on-error');
	  	}
	  }
  });
}

var openModalButton = document.getElementById("modal-opener");
var callbackForm = document.getElementById("modal-callback");
var closeModalButton = document.getElementById("close-modal");

if(openModalButton!==null && callbackForm !==null && closeModalButton!==null) {
  openModalButton.addEventListener('click', function() {
    showModal(callbackForm);
  }, true);
  closeModalButton.addEventListener('click', function() {
    closeModal(callbackForm);
  }, true);

  window.addEventListener('keyup', function (e) {
    if (e.which === 27) { 
      closeModal(callbackForm);
    }
  })
}
function showModal(elem) {
  elem.classList.toggle("visually-hidden");
  var name = document.querySelector('.callback-form [name=username]');
  name.focus();
  animate({
      duration: 1500,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
        borderTop.style.width = progress * 95 + '%';
        borderLeft.style.height = progress * 95 + '%';
        borderBottom.style.width = progress * 95 + '%';
        borderRight.style.height = progress * 95 + '%';
        borderTop.style.opacity = 1-progress;
        borderLeft.style.opacity = 1-progress;
        borderBottom.style.opacity = 1-progress;
        borderRight.style.opacity = 1-progress;
      }
    });
}
function closeModal(elem) {
  elem.classList.toggle("visually-hidden");
}

var firstRange = document.querySelector("[type=range].first");
var secondRange = document.querySelector("[type=range].second");

if(firstRange!==null && secondRange!==null) {
  firstRange.addEventListener("input", function () {
    firstRange.style.setProperty("--val", +firstRange.value);
  }, false);

  secondRange.addEventListener("input", function () {
    secondRange.style.setProperty("--val", +secondRange.value);
  }, false);

  function ready() {
    document.documentElement.classList.add("js");
    firstRange.style.setProperty("--val", +firstRange.value);
    secondRange.style.setProperty("--val", +secondRange.value);
  }
  document.addEventListener("DOMContentLoaded", ready);
}

var ymaps;

if(ymaps) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.93889934199378,30.326401896850584],
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark([59.93863921358829,30.323044581586483], {
        balloonContent: '«Глэйси» на карте'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-pin.png',
        iconImageSize: [218, 142],
        iconImageOffset: [-40, -140]
    });

    myMap.geoObjects
      .add(myPlacemark)
  });
}