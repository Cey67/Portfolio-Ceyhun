function getFocusOnClick(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien

  // Récupère l'attribut "data-target" de l'élément cliqué
  const targetId = event.currentTarget.getAttribute("data-target");

  // Récupère l'élément cible par son ID
  const element = document.getElementById(targetId);

  // Si l'élément existe, on fait défiler la page jusqu'à lui
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  // Ferme le menu après le clic (utile pour les menus mobiles)
  const nav = document.querySelector("nav");
  nav.classList.remove("active");
}

// Fonction pour afficher/masquer le menu
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}
