function displayPics() {
    var photos = document.getElementById("galerie_mini");
    // On récupére l'élément ayant pour id galerie_mini
    var liens = photos.getElementsByTagName('a');
    //On récupére tous les liens contenu dans galerie mini
    var big_photo = document.getElementById('big_pict');
    //On récupére l'id de la photo en taille normale

    var titre_photo = document.getElementById('photo').getElementsByTagName('dt')[0];
    //Le titre de la photo de taille normale
    //boucle parcourant l'ensemble des liens contenu dans galerie_mini
    for (let i = 0; i < liens.length; i++) {
        liens[i].addEventListener('click', () => {
            big_photo.src = this.href; // On change l'attribut src de l'image en le remplaçant par la valeur du lien
            big_photo.alt = this.title; // On change le titre de la photo
            titre_photo.firstChild.nodeValue = this.title; // On change le texte de titre de la photo
            return false;
        })
    }
}



//On appelle la fonction au chargement de la page

window.onload = displayPics;