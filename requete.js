//Execute un appel AJAXGET
//Prend en parametre l'URL cible et la fonction callback en cas de succée
function ajaxGet(url,callback){
	//création d'une requete htttp
	var requete = new XMLHttpRequest();
	//requete HTTTp GET synchrone vers le fichiers local texte
	requete.open("GET" , url); 
	requete.addEventListener('load',function(){
		if(requete.status >= 200 && requete.status < 400){
			//affiche la reponse a la requete
			callback(requete.responseText);
		}else {
			console.error(requete.status + " " + requete.statusText);
			}
		});

	requete.addEventListener('error',function(){
		console.error("Erreur réseau");
		});
	//envoi de la requete
	requete.send(null);
	};

function ajaxPost(url,data,callback,isJSON){
	var requete = new XMLHttpRequest();
	requete.open("POST",url);
	requete.addEventListener('load',function(){
		if (requete.status >= 200 && requete.status < 400){
			callback(requete.responseText);
		}else{
			console.error(requete.status + " " + requete.statusText + " " + url);
		}
	});
	requete.addEventListener('error',function(){
		console.error('Erreur reseau avec l\'url :' + " " + url);
	});
	if (isJSON){
		// Définit le contenu de la requête comme étant du JSON
        requete.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
	}
	requete.send(data);
	}

//ajaxGet("http://localhost:8888/javascript-web-srv/data/films.json", function (reponse){
	//transforme la reponse en tableau d'objet js
	
	//});
//recuperation de chaque entrée du formulaire d'enregistrement

const envoyer = document.getElementById('envoyer');
envoyer.addEventListener('click',function(e){
	const nom = document.getElementById('nom').value;
	const prenom = document.getElementById('prenom').value;
	const pseudo = document.getElementById('pseudo').value;
	const date = document.getElementById('date').value;
	const pays = document.getElementById('pays').value;
	const mail = document.getElementById('mail').value;

	const note = document.getElementById('note').value;



	/*var identite = new FormData();
	//ajout des info dans l'objet
	identite.append('nom',nom);
	identite.append('prenom',prenom);
	identite.append('mail',mail);*/

	var identite = { 
		nom : nom,
		prenom : prenom,
		pseudo : pseudo,
		date : date,
		pays : pays,
		mail : mail,
		newsletter : note
		};

	e.preventDefault();

	// Création et configuration d'une requête HTTP POST vers le fichier post_form.php
	ajaxPost("http://localhost:8888/javascript-web-srv/data/post_json.php",identite,function(reponse){		
		console.log("commande envoyé avec succée");
	},true);
});

