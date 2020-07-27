//mes variables
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');

//les fonctions
// - Verificationdes données au fur et a mesure de la saisie
function verifIdentite (status,e){
	status.addEventListener('blur',function(){
	if (status.value.length > e){
		status.style.backgroundColor = 'rgba(184, 255, 224, 0.36)';//vert pale
		} else {
			status.style.backgroundColor = 'rgba(255, 184, 184, 0.36)';//rouge pale
			}
		});
	}

//1.focus sur l'éléments nom au chargement de la page
nom.focus();

//2.verification des saisies au fur et à mesure des saisies
verifIdentite(nom,2);
verifIdentite(prenom,2);
verifIdentite(pseudo,4);
verifIdentite(mail,6);

//3.afficher les informations de saisie
	//--je recupére le parent du bouton a insérer
/*const recupBoutton= document.querySelectorAll('.bouttonI');

for (i=0 ; i<recupBoutton.length ; i++){
	var	recupBouttonI = recupBoutton[i].parentNode;

		//--création du boutton [I]nformation
	var bouttonI = document.createElement('p');
	bouttonI.textContent = 'i';
	bouttonI.className ='pTemporaire';
	var pTempo = bouttonI.querySelector('.pTemporaire');
		//--insertion du boutton a coté de l'input
	recupBouttonI.appendChild(bouttonI);
		//mmise en page du boutton
	var mep = document.getElementById('ligneJs');
	mep.style.flexDirection = 'row';
	

	recupBouttonI.addEventListener('click',function(e){
		e.preventDefault();
		var info = recupBouttonI.querySelector('.information');
		console.log(recupBouttonI);
		pTempo.style.display = 'none';
		//info.style.display = 'initial';
		mep.style.flexDirection = 'column';
		recupBouttonI.style.display ="none";
	});
}*/










