console.log('we');
/* 

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon divertimento e confermate lettura come al solito!

*/

const containerEl = document.querySelector('.row')

const team = [

    {
        nome: "Wayne Barnett",
        job: "Founder & CEO",
        img: "./assets/img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        job: "Chief Editor",
        img: "./assets/img/angela-caroll-chief-editor.jpg",
    },

    {
        nome: "Walter Gordon",
        job: "Office Manager",
        img: "./assets/img/walter-gordon-office-manager.jpg",
    },

    {
        nome: "Angela Lopez",
        job: "Social Media Manager",
        img: "./assets/img/angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Scott Estrada",
        job: "Developer",
        img: "./assets/img/scott-estrada-developer.jpg",
    },

    {
        nome: "Barbara Ramos",
        job: "Graphic Designer",
        img: "./assets/img/barbara-ramos-graphic-designer.jpg",
    },

]

console.log(team);

for (let i = 0; i < team.length; i++) {
    
    const teamEl = team[i]
    
    const markup =`

    <div class="col-4">
        <div class="card">
            <div class="card-img">
                <img class="img-fluid" src="${teamEl.img}" >
            </div>
            
            <div class="card-body">
            
                <h2>${teamEl.nome}</h2>
                <h4>${teamEl.job}</h4>
            
            </div>
        </div>

    </div>
        
    `
    containerEl.insertAdjacentHTML('beforeend', markup);
   
   
    for (const key in team[i]) {
        const value = team[i][key];
        console.log(value); 
        
        
    }
    
}