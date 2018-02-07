var nextGen = nextGen || {};

nextGen.ready = function(callback) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading'){
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

nextGen.createClassList = function(el, className) {
  var classes = el.className.split(' ');
  var existingIndex = classes.indexOf(className);

  if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push(className);

  return classes.join(' ');
}

nextGen.toggleMenu = function() {
  var toggleButton = document.querySelector('.nav__button');
  var navigation = document.querySelector('.nav__nav-bar');
  if (toggleButton) {
    toggleButton.addEventListener('click', function(e) {
      if (toggleButton.classList) {
        toggleButton.classList.toggle('nav__button--active')
      } else {
        toggleButton.className = nextGen.createClassList(toggleButton, 'nav__button--active');
      }

      if (navigation.classList) {
        navigation.classList.toggle('nav__nav-bar--active')
      } else {
        navigation.className = nextGen.createClassList(navigation, 'nav__nav-bar--active');
      }
      e.preventDefault();
    });
  }
}

nextGen.toggleModal = function() {
  var toggleState = document.querySelector('.contact-form__state');
  toggleState.addEventListener('change', function() {
    if (this.checked) {
      if (document.body.classList) {
        document.body.classList.add('body--modal-open');
      } else {
        document.body.className += ' ' + 'body--modal-open';
      }
    } else {
      debugger;
      if (document.body.classList) {
        document.body.classList.remove('body--modal-open');
      } else {
        document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'body--modal-open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  });
}

nextGen.buildGrid = function() {
  var items = Array.from(document.querySelectorAll('.city-picker__item'));
  var totalRows = Math.floor(items.length / 2.5);
  var i;

  for (i = 0; i <= totalRows; i++) {
    var shiftOddRowsBy;
    var  shiftEvenRowsBy;

    if (i === 0) {
      shiftOddRowsBy = 1;
      shiftEvenRowsBy = 2;
    } else if (i % 2 === 1) {
      shiftOddRowsBy = i + 2;
      shiftEvenRowsBy = i + 3;
    } else {
      shiftOddRowsBy = i + 3;
      shiftEvenRowsBy = i + 4;
    }

    // Arrange first three of every five into odd rows
    items.slice(5 * i, 5 * i + 3)
      .forEach(function(item) {
        item.style.gridRow = shiftOddRowsBy + ' / span 2';
      });

    // Arrange last two of five into even rows
    items.slice(5 * i + 3, 5 * i + 5)
      .forEach(function(item) {
        item.style.gridRow = shiftEvenRowsBy + ' / span 2';
      });
  }
};

nextGen.ready(function() {
  nextGen.buildGrid();
  nextGen.toggleMenu();
  nextGen.toggleModal();
});