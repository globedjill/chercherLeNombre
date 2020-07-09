//mes variables
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');

//les fonctions
// - Verificationdes données au fur et a mesure de la saisie
function verifIdentite (status,e){
	var nombre = parseInt(e);
	status.addEventListener('blur',function(){
	if (status.value > status.value.nombre){
		status.style.backgroundColor = 'rgba(184, 255, 224, 0.36)';//vert pale
		console.log('vert');

	} else {
		status.style.backgroundColor = 'rgba(255, 184, 184, 0.36)';//rouge pale
		console.log('rouge');
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
var recupBouttonI= document.querySelector('.bouttonI').parentNode;

//for (i=0 ; i<recupBoutton.length ; i++){
//	var	recupBouttonI = recupBoutton[i].parentNode;
//}


	//--création du boutton [I]nformation
var bouttonI = document.createElement('p');
bouttonI.textContent = 'i';
	//--insertion du boutton a coté de l'input
recupBouttonI.appendChild(bouttonI);
	//mmise en page du boutton
var mep = document.getElementById('ligneJs');
mep.style.flexDirection = 'row';
bouttonI.style.color = 'blue';
bouttonI.style.border = '1px solid black';
bouttonI.style.textAlign= 'center';
bouttonI.style.fontSize = '10px';
bouttonI.style.marginLeft = '5px';
bouttonI.style.width = '10px';
bouttonI.style.height = '10px';
bouttonI.style.cursor = 'pointer';

bouttonI.addEventListener('click',function(e){
	e.preventDefault();
	var info = document.getElementById('information');
	console.log(info);
	info.style.display = 'initial';
	mep.style.flexDirection = 'column';
	bouttonI.style.display ="none";
});





