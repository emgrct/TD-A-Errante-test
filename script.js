// Variables 
let maVar = "true" //Valeur qui est amenée à changer
const maConst = "Autre valeur" //Ne changera jamais 

// Structures conditionelles
// if(condition et condition ou (condition et condition))
// == : teste uniquement la valeur, === : teste la valeur et le type de la valeur
if(maVar == "true"){
    console.log("C'est vrai")
} else if(maVar == "titi"){
} else {
    console.log("on est dans le else")
}

switch(maVar){
    case "true" :
        console.log("C'est ok")
        break;
    case "titi" : 
        console.log("titi")
        break;
    default : 
        console.log("On est dans le cas par défaut")
}

// Ternaire
// Variable = (condition) ? valeur si vrai : valeur si faux
let age = 19
let information = age >= 18 ? "Majeur" : "Mineur" 
//Même chose les deux mais écrit différement
if(age >= 18){
    information = "Majeur"
} else{
    information = "Mineur"
}

if(age > 16 && age < 18){
    console.log("Pas encore majeur")
} else if (age > 18 && age < 30){
    console.log("test")
}

// Boucles 
    //while --> structure iterative universelle
    //for
        //for(compteur; condition; incrémentation/décrémentation)
        //for in 
        //for of
    //forEach

//for(compteur; condition; incrémentation/décrémentation)
for(let i; i < 100; i = i + 2){
    console.log("Nombre pair : "+ i)
}

//`` --> alt gr touche 7 du clavier x2 `` = back tic
age = 19
let prenom = "Emma"
let nom = "Greciet" 

console.log(`Bonjour je m'appelle ${prenom} ${nom}, j'ai ${age} ans`)

for(let i; i < 100; i=i + 2){
    console.log("Nombre pair : "+ 1)
}

//Boucle while 
//Amorçage de la variable de boucle 
let i = 0
while(i < 100){
    console.log(`Nombre impair ${i}`)
    // Modification de la condition
    // i = i + 2 --> équivalent à la ligne au dessous
    i += 2
}

let valeur = "huhu"
while (valeur != "ahah"){
    console.log("La valeur est différente")

    valeur = "ahah"
}


// Fonctions 
function direBonjour(prenom){
    console.log(`Bonjour ${prenom}`)
}
direBonjour("Jean-Louis")
direBonjour("Gérard")

// Fonction fléchée 
const sayHello = (prenom) => {
    console.log(`Bonjour ${prenom}`)
}
sayHello("Jean-Louis")
sayHello("Gérard")



//On peut se passer des ;
//DRY : Don't Reapeat Yourself

//sélectionne le h1
const h1 = document.querySelector("h1")

h1.innerHTML = "Toto" //on peut rajouter du html dedans aussi
h1.textContent = "Titi"

//Les dernières modification sont prises en compte


// beforebegin : avant la sélection
// afterbegin : à l'intérieur de la sélection, avant le contenu
// beforeend : à l'intérieur de la sélection, après le contenu
// afterend : après la sélection
//insertAdjacentHTML(position, le html à insérer)

document.querySelector("body > section:nth-child(2)").insertAdjacentHTML("afterbegin", "<article>Mon premier article</article>")

// h1.addEventListener("type événement à observer", fonction à exécuter)

h1.addEventListener;('click', () => {
    count++ 
    h1.textContent += count 
})  

// localStorage.setItem("clé", valeur au format STRING) //stocke une valeur dans le localStorage

localStorage.setItem("prenom", "Emma")

// localStorage.getItem("clé") //récupère la valeur associée à la clé

const prenomStocke = localStorage.getItem("prenom")
console.log(prenomStocke)

const person = {
    prenom : "Emma",
    nom : "Greciet",
    age : 19
}

const strPerson = JSON.stringify(person) //transforme un objet en string
localStorage.setItem('person', strPerson)  


console.log(person.nom)

const fruits = ["tomate", "pomme", "banane", "orange"]

const ul = document.querySelector("ul")

fruits.forEach((el) => {
    ul.insertAdjacentHTML("afterbegin", <li>${el}</li>)
})


const buttons = document.querySelectorAll("button") 

buttons.forEach((button) => {
    button.addEventListener("click", (el) => {
        console.log("Tu as cliqué sur le bouton")
    })
})