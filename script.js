function toggleMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("menu-overlay");
    menu.classList.toggle("active");
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
  }
  
  function closeMenu() {
    var menu = document.getElementById("menu");
    var overlay = document.getElementById("menu-overlay");
    menu.classList.remove("active");
    overlay.style.display = "none";
  }
  