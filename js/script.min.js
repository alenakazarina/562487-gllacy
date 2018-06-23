var menu = document.getElementById("dropdown-menu");
var toggle = document.getElementById("dropdown-menu-toggle");

toggle.addEventListener("focus", function( event ) {
  if (menu.className === "dropdown-menu flex-column active") {
    menu.className = "dropdown-menu flex-column visually-hidden";
  } else {
      menu.className = "dropdown-menu flex-column active";
  }   
}, true);
toggle.addEventListener("focusout", function( event ) {
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


var search = document.getElementById("search-form");
toggle = document.getElementById("search-toggle");

toggle.addEventListener("focus", function( event ) {
  if (search.className === "search-form active") {
    search.className = "search-form visually-hidden";
  } else {
    	search.className = "search-form active";
  }   
}, true);
toggle.addEventListener("focusout", function( event ) {
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
toggle = document.getElementById("login-toggle");

toggle.addEventListener("focus", function( event ) {
  if (login.className === "login-form flex-column active") {
    login.className = "login-form flex-column visually-hidden";
  } else {
    	login.className = "login-form flex-column active";
  }   
}, true);
toggle.addEventListener("focusout", function( event ) {
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
toggle = document.getElementById("cart-toggle");

if(cart !== null) {
	toggle.addEventListener("focus", function( event ) {
	  if (cart.className === "cart-form flex-column active") {
	    cart.className = "cart-form flex-column visually-hidden";
	  } else {
	    	cart.className = "cart-form flex-column active";
	  }   
	}, true);
}
if(cart !== null) {
	toggle.addEventListener("focusout", function( event ) {
	  if (cart.className === "cart-form flex-column active") {
	    cart.className = "cart-form flex-column visually-hidden";
	  } else {
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



var openModalButton = document.getElementById("modal-opener");
var callbackForm = document.getElementById("modal-callback");
var closeModalButton = document.getElementById("close-modal");

if(openModalButton!==null && callbackForm !==null && closeModalButton!==null) {
  openModalButton.addEventListener('click', function() {
    callbackForm.className = "modal modal-callback";
  }, true);
  closeModalButton.addEventListener('click', function() {
    callbackForm.className = "modal modal-callback visually-hidden";
  }, true);
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