let id = (id) => document.getElementById(id);

let formClass = (formClass) => document.getElementsByClassName(formClass);

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg = formClass("error"),
failureIcon = formClass("failure-icon"),
successIcon = formClass("success-icon");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    invalForm(username, 0, "le champ ne doit pas etre vide");
    invalForm(email, 1, "le champ ne doit pas etre vide");
    invalForm(password, 2, "le champ ne doit pas etre vide");

});

let invalForm = (id, serial, message) =>{
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity ="0";
        successIcon[serial].style.opacity ="1";
    }
}














// var prenoms = [], 
// prenom;
// while (prenom = prompt('Entrez un prénom :')) {
// prenoms.push(prenom); // Ajoute le nouveau prénom ainsi qu'un espace
// } 
// if (prenoms.length > 0) {
// alert(prenoms.join(' '));
// } else {
// alert('Il n\'y a aucun prénom en mémoire');
// }

// var prenoms = ["Diop", "ndiaye", "seck"];
// var prenom ;
// while (prenom = prompt('Entrer un prenom:')) {
//     prenoms.push(prenom); //Ajouter le nouveau prenom ainsi qu'un espace
// }
// if(prenoms.length > 0) {
//     alert(prenoms.join(' '));

// } else {
//     alert('il n\'y a aucun prenom en memoir');
// }