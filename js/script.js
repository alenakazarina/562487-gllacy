function showElement(element) {
	element.classList.toggle('visually-hidden');
	element.classList.toggle('active');
}
function hideElement(element) {
	element.classList.toggle('active');
	element.classList.toggle('visually-hidden');
}
function isActive(element) {
	if (element.classList.contains('active')) {
		return true;
	} 
	return false;
}
var menu = document.getElementById("dropdown-menu");
var toggleMenu = document.getElementById("dropdown-menu-toggle");

toggleMenu.addEventListener("focus", function() {
  if (isActive(menu)) {
   	hideElement(menu);
  } else {
  	showElement(menu);
  }
}, true);
toggleMenu.addEventListener("focusout", function() {
  if (isActive(menu)) {
   	hideElement(menu);
  } else {
  	showElement(menu);
  }
}, true);
menu.addEventListener("focus", function() {
 	showElement(this);
}, true);
menu.addEventListener("focusout", function() {
	hideElement(this);
}, true);

var search = document.getElementById("search-form");
toggleSearch = document.getElementById("search-toggle");

toggleSearch.addEventListener("focus", function( event ) {
  if (isActive(search)) {
    hideElement(search);
  } else {
    	showElement(search);  
  }   
}, true);
toggleSearch.addEventListener("focusout", function( event ) {
  if (isActive(search)) {
    hideElement(search);
  } else {
     	showElement(search);
  }   
}, true);
search.addEventListener("focus", function( event ) {
  showElement(search);
}, true);
search.addEventListener("focusout", function( event ) {
  hideElement(search);
}, true);


var login = document.getElementById("login-form");
toggleLogin = document.getElementById("login-toggle");

toggleLogin.addEventListener("focus", function( event ) {
  if (isActive(login)) {
    hideElement(login);
  } else {
    	showElement(login);
  }   
}, true);
toggleLogin.addEventListener("focusout", function( event ) {
  if (isActive(login)) {
    hideElement(login);
  } else {
     	showElement(login);
  }   
}, true);

login.addEventListener("focus", function( event ) {
  showElement(login);
}, true);
login.addEventListener("focusout", function( event ) {
  hideElement(login);
}, true);

var cart = document.getElementById("cart-form");
var toggleCart = document.getElementById("cart-toggle");

if(cart !== null) {
	toggleCart.addEventListener("focus", function( event ) {
	  if (isActive(cart)) {
	    hideElement(cart);
	  } else {
	    	showElement(cart);
	  }   
	}, true);

	toggleCart.addEventListener("focusout", function( event ) {
	  if (isActive(cart)) {
	    hideElement(cart)
	  } else {
	  		showElement(cart);	
	  }   
	}, true);

	cart.addEventListener("focus", function( event ) {
	  showElement(cart);
	}, true);

	cart.addEventListener("focusout", function( event ) {
	  hideElement(cart);
	}, true);
}

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
    if(isActive(this.parentNode)) {
      this.parentNode.classList.remove("active");
    }
  }, true);
}
for (var i=0; i<navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    this.parentNode.classList.add("active");
  }, true);
}

var navItems = document.getElementsByClassName("slide-nav");
var slides = document.getElementsByClassName("product-slide");
var colors = ["#849d8f","#8996a6","#9d8b84"];
var wrapper = document.getElementById("wrapper");
var currentSlide = 0;

function getCurrent() {
  for(var i=0; i<navItems.length; i++) {
    if(navItems[i].classList.contains('slide-nav-current')) {
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
    navItems[currentSlide].classList.remove('slide-nav-current');
    event.target.classList.add('slide-nav-current');
    slideChange(); 
  }, true);
}

var form = document.getElementById('callback-form');
var inputs = document.querySelectorAll(".callback-form .form-input");
function removeError(elems) {
	for(var i=0; i < elems.length; i++) {
		if(elems[i].classList.contains('on-error')) {
			elems[i].classList.remove('on-error');
		}
  }
}
if(form !== null) {
  form.addEventListener('submit', function(evt) {
  	var flag = 0;
  	removeError(inputs);
  	evt.preventDefault();
  	for(var i=0; i < inputs.length; i++) {
	    if(!inputs[i].value) {
	      inputs[i].classList.add('on-error');
	      flag++;
	    }
	  }
	  if(!flag) {
	  	form.submit();
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

var borders = document.querySelectorAll('.form-border');
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

function showModal(elem) {
  elem.classList.toggle("visually-hidden");
  removeError(inputs);
	var name = document.querySelector('.callback-form [name=username]');
  name.focus();
  animate({
    duration: 1500,
    timing: function(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
    	for (var i=0; i<borders.length; i++) {
    		if(i%2 == 0) {
    			borders[i].style.width = progress * 95 + '%';
    			borders[i].style.opacity = 1-progress;
    		} else {
    			borders[i].style.height = progress * 95 + '%';
    			borders[i].style.opacity = 1-progress;
    		}
    	}
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