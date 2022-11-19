
function latex() {
    document.getElementById("latex1").classList.toggle("showLatex");
}

window.onclick = function(event) {
  if (!event.target.matches('.latex_btn')) {

    var dropdowns = document.getElementsByClassName("latex_categories_styles");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showLatex')) {
        openDropdown.classList.remove('showLatex');
      }
    }
  }
}

function spandex() {
    document.getElementById("spandex1").classList.toggle("showSpandex");
}

window.onclick = function(event) {
  if (!event.target.matches('.spandex_btn')) {

    var dropdowns = document.getElementsByClassName("spandex_categories");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showSpandex')) {
        openDropdown.classList.remove('showSpandex');
      }
    }
  }
}

function header_menu() {
    document.getElementById("header_menu1").classList.toggle("showHeaderMenu");
}

window.onclick = function(event) {
  if (!event.target.matches('.header_left_menu_pad')) {

    var dropdowns = document.getElementsByClassName("header_drop_down");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showHeader')) {
        openDropdown.classList.remove('showHesder');
      }
    }
  }
}

function latex_pad() {
    document.getElementById("latex_pad1").classList.toggle("showLatexPad");
}

window.onclick = function(event) {
  if (!event.target.matches('.latex_btn_pad')) {

    var dropdowns = document.getElementsByClassName("latex_categories_pad_styles");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showLatexPad')) {
        openDropdown.classList.remove('showLatexPad');
      }
    }
  }
}

function footer() {
    document.getElementById("footer1").classList.toggle("showFooter");
}

window.onclick = function(event) {
  if (!event.target.matches('.footer_menu')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showFooter')) {
        openDropdown.classList.remove('showFooter');
      }
    }
  }
}