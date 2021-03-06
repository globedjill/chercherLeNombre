// générer un nombre aléatoire entre 1 et 100
var aDeviner = Math.floor(Math.random()*100)+1;
console.log(aDeviner);

var valider = document.getElementById('valider');
var propos = document.getElementById('propos');
var reponse = document.getElementById('reponse');
var suggestions = document.getElementById('suggestions');
var inf = document.getElementById('inferieur');
var sup = document.getElementById('superieur');
var propos_precInf = document.getElementById('propos_precInf');
var propos_precSup = document.getElementById('propos_precSup');
const form = document.getElementById('form');
const temps = document.getElementById('timer');
const compteurElt = document.getElementById('timer');
var interval = null;

var stokPropo = [];
var cout = 10;


function demarrer(){
	//création du bouton démarrer
	var parentBoutton = document.getElementById('form');
	var button1 = document.createElement('button');
	button1.textContent = "Demarrer";
	parentBoutton.replaceChild(button1,valider);
	//Action lors du click sur le boutton 
	button1.addEventListener("click",function(){
		//-modification du bouton
		parentBoutton.replaceChild(valider,button1);
		//-Demarrage du timer
		interval = setInterval(timer, 1000);
		animatedId = requestAnimationFrame(deplacerBloc);
		});
	}
function valide(e) {
		e.preventDefault();
		propos.focus();
		var propositions = Number(propos.value);
		// - Création et enregistrement des propositions précedente.
		var propos_prec = document.getElementById('propos_prec');
		stokPropo.push(propositions);
		let propString = "Proposition précedentes : ";
		for(i = 0 ; i< stokPropo.length ; i++){
			propString += stokPropo[i] + " - " ;
		}
		propos_prec.textContent = propString;	
		// - Création de la valeur plus ou moins grand.
		if (propositions === aDeviner){
			win();
			return;
		} else {
			label.style.backgroundColor = "rgba(233, 12, 89, 0.12)";
			if (propositions < aDeviner){
		//si proposition et Supérieur
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
		if(cout === 0){
		gameOver();
			}
		};
function timer() {
	//je recupere la span du timer
	var compteur = Number(compteurElt.textContent);
	if (compteur > 0){
			//Je décremente de 1 a chaque seconde
		 	compteurElt.textContent = compteur - 1;
	}else{
		gameOver();
		}

 	}
function deplacerBloc(){
	//recuperation du bloc temps
	var deplacement = document.getElementById('reduction');
	var chrono = document.getElementById('chrono');
	var vitesse = 0.065;
	//recuperation de la largeur du bloc
	var largeurBloc = parseFloat(getComputedStyle(deplacement).width);
	var animatedId = null;
	//convertion du bloc en nombre
	var xBloc = parseFloat(getComputedStyle(deplacement).width);
	var xMax = parseFloat(getComputedStyle(chrono).width);
	if(xBloc + vitesse <= xMax){
		//deplacement
		deplacement.style.width = (xBloc + vitesse) + 'px';
		//demande au navigateur d'appeller la fonction dés que la function démarrer et activé	
		animatedId = requestAnimationFrame(deplacerBloc);
		}else{
			cancelAnimationFrame(animatedId);
		}
	}
function gameOver() {
		clearInterval(interval);
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
		rejouer();
		}	
function win() {
		clearInterval(interval);
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
			rejouer();
		};
function rejouer(){
	//creation d'un bouton rejouer qui remplace le bouton valider
	var parentBoutton = document.getElementById('form');
	var rejouer = document.createElement('button');
	rejouer.textContent = 'Rejouer';
	parentBoutton.replaceChild(rejouer,valider);
	//Action lors du click sur le bouton
	rejouer.addEventListener('click',function(){
		parentBoutton.replaceChild(valider,rejouer);
		reset();
		});
	}
function reset() {
		//réinitialisation des couts et réactivation des entrées
		cout = 10;
		reponse.textContent = cout + " : Essai";
		valider.disabled = false ;
		propos.disabled = false;
		//reinitialisation du tableau
		stokPropo = [];
		//nouveau chiffre à trouver
		aDeviner = Math.floor(Math.random()*100)+1;
		console.log(aDeviner);
		propos.value = "";
		propos.focus();
		//reinitialisation de tous les styles et valeur précedentes.
		reponse.style.fontSize = "";
		label.style.backgroundColor = "";
		reponse.style.color = "";
		propos.style.backgroundColor = "";
		propos_prec.textContent = "";
		suggestions.textContent = "";
		propos_precSup.textContent = "0";
		propos_precInf.textContent = "0";
		temps.textContent = "30";
		demarrer();
		};

demarrer();
form.addEventListener("submit",valide);


//Bouton se connecter
var seConnecter = document.getElementById('seConnecter');
window.addEventListener('load',function(){
	var lien = document.createElement('a');
	lien.href = "sEnregistrer.html";
	lien.textContent = 'Se connecter';
	console.log(lien);
	seConnecter.appendChild(lien);
	});
