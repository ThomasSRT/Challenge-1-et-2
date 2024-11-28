let playlist =[
    ["Bohemian rhapsody","queen"],
    ["Imagine","john lenon"],
];
console.log(playlist);
let autrechanson=prompt("Veuillez entrez une autre chanson")
let autrecreateur=prompt("qui la chante?")
playlist.push(autrechanson)
console.log(playlist);

let durée= 5.34
let durée2= 3.40
let durée3= 7.20
console.log(playlist[0],durée,"Min");
console.log(playlist[1],durée2,"Min");
console.log([playlist[2],autrecreateur],durée3,"Min");

console.log(`la durée total de la playlist est de ${durée+durée2+durée3}`)
