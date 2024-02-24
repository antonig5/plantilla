function scrollToSection(sectionId) {
  // Usa document.getElementById para obtener la sección
  var section = document.getElementById(sectionId);

  // Verifica si la sección existe antes de intentar desplazarte hacia ella
  if (section) {
    // Usa el método scrollIntoView con la opción { behavior: 'smooth' }
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function openMenu(evt, section) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(section).style.display = "block";
  evt.currentTarget.className += " active";
}
openMenu({ currentTarget: document.querySelector(".tablinks") }, "Sopas");

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});
