function calculerPourcentage(notes, moyenneClasse) {
    const nbEtudiantsAvecMoyenne = notes.filter(note => note >= moyenneClasse).length;
    return (nbEtudiantsAvecMoyenne / notes.length) * 100;
}
function attribuerMention(moyenneClasse) {
    if (moyenneClasse >= 16) {
        return 'Très bien';
    } else if (moyenneClasse >= 12) {
        return 'Bien';
    } else if (moyenneClasse >= 10) {
        return 'Passable';
    } else {
        return 'Insuffisant';
    }
}
function afficherDateHeure() {
    const maintenant = new Date();
    return maintenant.toLocaleString();
}
const notes = [12, 15, 8, 19, 11, 14, 17, 13];
const moyenneClasse = notes.reduce((a, b) => a + b, 0) / notes.length;

console.log(`Notes de la classe : ${notes}`);
console.log(`Moyenne de la classe : ${moyenneClasse.toFixed(2)}`);
console.log(`Pourcentage d'étudiants ayant la moyenne : ${calculerPourcentage(notes, moyenneClasse).toFixed(2)}%`);
console.log(`Mention de la classe : ${attribuerMention(moyenneClasse)}`);
console.log(`Date et heure du calcul : ${afficherDateHeure()}`);
function trierNotes(notes, ordre = 'croissant') {
    return notes.sort((a, b) => ordre === 'croissant' ? a - b : b - a);
}
function afficherEtudiantsEchoues(notes, moyenneClasse) {
    return notes.filter(note => note < moyenneClasse);
}
const notesTriees = trierNotes(notes);
const etudiantsEchoues = afficherEtudiantsEchoues(notes, moyenneClasse);

console.log(`Notes triées : ${notesTriees}`);
console.log(`Étudiants ayant échoué : ${etudiantsEchoues}`);
