// générer un nombre aléatoire entre 1 et 100
var aDeviner = Math.floor(Math.random()*1000)+1;
console.log(aDeviner);
var regex = /\d/;

var valider = document.getElementById('valider');
var propos = document.getElementById('propos');
var stokPropo = [];
var cout = 15;
var reponse = document.getElementById('reponse');
var suggestions = document.getElementById('suggestions');
var conteur = document.getElementById('conteur');
var rejouer = document.getElementById('rejouer');
var inf = document.getElementById('inferieur');
var sup = document.getElementById('superieur');
var propos_precInf = document.getElementById('propos_precInf');
var propos_precSup = document.getElementById('propos_precSup');
var compteurElt = document.getElementById('timer');

//var interval = setInterval(function(){label.style.backgroundColor = "white";},1000);

/*function timer() {
	var buttonDemarer = document.createElement('button');
	buttonDemarer.textContent = "Demarrer";
	buttonDemarer.appendChild(valider);

	var compteur = Number(compteurElt.textContent);        
    compteurElt.textContent = compteur - 1;
  	setInterval(timer, 1000);
	}*/
function gameOver() {
	if (cout === 0 ){
		//j'affiche un message avec un style
		reponse.textContent = "Game Over";
		label.style.backgroundColor = "red";
		reponse.style.color = "white";
		//Affichage de la réponse
		suggestions.textContent = 'Le chiffre a Découvrir été le : ' + aDeviner;
		//je rend les champs innacessible
		valider.disabled = true;
		propos.disabled = true;		
		//J'active le bouton rejouer
		rejouer.style.display = "initial";
		}
	};
function gagnée () {
		//j'affiche un message de félicitation avec un style
		reponse.textContent = "Congratulation";
		label.style.backgroundColor = "rgba(82, 255, 122, 0.34)";
		reponse.style.color = "white";
		propos.style.backgroundColor = "rgba(82, 255, 122, 0.34)";
		//je desactive les entrées
		valider.disabled = true;
		propos.disabled = true;
		//je supprime le texte
		suggestions.textContent = "";
		//j'affiche le boutton rejouer
		rejouer.style.display = "initial";
		};
function reset() {
		//réinitialisation des couts et réactivation des entrées
		cout = 15;
		reponse.textContent = cout + " : Essai";
		valider.disabled = false ;
		propos.disabled = false;
		//reinitialisation du tableau
		stokPropo = [];
		//nouveau chiffre à trouver
		aDeviner = Math.floor(Math.random()*1000)+1;
		console.log(aDeviner);
		propos.value = "";
		propos.focus();
		//je cacher le bouton rejouer
		rejouer.style.display = "none";
		//reinitialisation de toutes les styles et valeur précedentes 
		reponse.style.fontSize = "";
		label.style.backgroundColor = "";
		reponse.style.color = "";
		propos.style.backgroundColor = "";
		propos_prec.textContent = "";
		suggestions.textContent = "";
		propos_precSup.textContent = "";
		propos_precInf.textContent = "";
		};
function valide() {
		propos.focus();
		var propositions = Number(propos.value);
		//verification de la saisie
		if (regex.test(propositions)){
			console.log("test");
	// - Création et enregistrement des propositions précedente.
		var propos_prec = document.getElementById('propos_prec');
		stokPropo.push(propositions);
		for(i = 0 ; i< stokPropo.length ; i++){
			propos_prec.textContent = "Proposition précedentes : " + stokPropo + " - " ;
		}		
	// - Création de la valeur plus ou moins grand.
		if (propositions === aDeviner){
			gagnée();
			return;
		} else {
			label.style.backgroundColor = "rgba(233, 12, 89, 0.42)";
			if (propositions < aDeviner){
			propos.style.backgroundColor ="rgba(255, 82, 82, 0.31)";
	//si proposition et Supérieur
			//interval;
			propos_precSup.textContent = propositions;
			reponse.textContent = "Faux " + cout +": Essai restant " ;
			propos_precSup.style.backgroundColor = "rgba(233, 218, 12, 0.9)";
			propos_precInf.style.backgroundColor = "rgba(12, 34, 233, 0.06)";
			sup.style.color = "rgba(233, 218, 12, 0.9)";//jaune
			inf.style.color = "rgba(12, 34, 233, 0.06)";//bleu
			suggestions.textContent = "Le chiffre est plus grand";
			} else {
	//si proposition est Inférieur
				propos.style.backgroundColor = "rgba(255, 82, 82, 0.31)";
				//interval;
				propos_precInf.textContent = propositions;
				reponse.textContent = "Faux " + cout + ": Essai restant";
				suggestions.textContent = "Le chiffre est plus petit";
				propos_precInf.style.backgroundColor = "rgba(12, 34, 233, 0.9)";
				propos_precSup.style.backgroundColor = "rgba(233, 218, 12, 0.12)";
				inf.style.color = "rgba(12, 34, 233, 0.9)";
				sup.style.color = "rgba(233, 218, 12, 0.12)";
		}};
		cout--;
		propos.focus();
		propos.value = "";
		reponse.textContent = cout + " : Essai";
		gameOver();
		}else{ alert('erreur de saisie')};
		};

valider.addEventListener("click",valide);

rejouer.addEventListener('click',reset);

reponse.textContent = cout + " : Essai";
