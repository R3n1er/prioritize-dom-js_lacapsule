// Criticité 1 = vert
// Criticité 2 = jaune
// Criticité 3 = orange
// ******CONSIGNE*******
//👉 Via le DOM, en Javascript,  vous allez devoir modifier la couleur des tâches en respectant la maquette 

// définir variable pour afficher le numéro de la tache en se basant sur la classe
var tasks = document.getElementsByClassName("task");

// renseigner le numéro de tache depuis le tableau de la variable tasks
for (var i = 0; i < tasks.length; i++) {
  tasks[i].textContent = 'TASK #' + (i + 1);
};

// variable ppur definir le niveau de priorité
var criticalities = document.getElementsByClassName("criticality");

// dans le tableau des priorités, changer le backgroundColor en CSS

for (var i = 0; i < criticalities.length; i++) {
  if (criticalities[i].textContent == 1) {
    criticalities[i].style.backgroundColor = '#2ecc71';
  } else if (criticalities[i].textContent == 2) {
    criticalities[i].style.backgroundColor = '#f1c40f';
  } else if (criticalities[i].textContent == 3) {
    criticalities[i].style.backgroundColor = '#e67e22';
  } else if (criticalities[i].textContent == 4) {
    criticalities[i].style.backgroundColor = '#e74c3c';
  };
};

// 👉 Mettre en place une mécanique permettant, au chargement, d’afficher uniquement les tâches de priorité 3 & 4.



var container = document.getElementById("container");
var div = document.createElement("div");
var newText = document.createTextNode(
  "Seules les tâches ayant un niveau de criticité supérieur à 2 sont affichées."
);
div.appendChild(newText);
div.style.color = "white";
div.style.fontSize = "16px";
div.style.textAlign = "center";


for (var i = 0; i < criticalities.length; i++) {
  if (criticalities[i].textContent < 3) {
    criticalities[i].parentNode.style.display = 'none'; // ne pas afficher le parent donc la classe row
    container.prepend(div);
    // container.appendChild(div);
  };
};