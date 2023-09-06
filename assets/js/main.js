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

Ecco a voi il tanto desiderato BONUS AGGIUNTIVO:
Aggiungete un form in pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
Per l’immagine potete inserire una immagine da un sito a caso oppure un link online per la generazione di un’immagine casuale. Questo sito può esservi utile: https://picsum.photos/

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
    
   /*  const markup =`
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
    */


    const immagine = `${teamEl.img}`
    const nomi =  `${teamEl.nome}`
    const lavoro =  `${teamEl.job}`


    markup(immagine, nomi, lavoro)

    for (const key in team[i]) {
        const value = team[i][key];
        console.log(value);    
    }   
}

function markup(img, nome, job) {
    
    const colEl = document.createElement('div')
    colEl.classList.add('col-4')
    containerEl.append(colEl)
   
    const cardEl = document.createElement('div')
    cardEl.classList.add('card')
    colEl.append(cardEl)
   
    const cardImgEl = document.createElement('div')
    cardImgEl.classList.add('card-img')
    cardEl.append(cardImgEl)
   
    const imgEl = document.createElement('img')
    imgEl.classList.add('img-fluid')
    imgEl.src = `${img}`
    cardImgEl.append(imgEl)
   
    const cardBodyEl = document.createElement('div')
    cardBodyEl.classList.add('card-body')
    cardEl.append(cardBodyEl)
   
    const nameEl = document.createElement('h2')
    nameEl.insertAdjacentHTML('beforeend', `${nome}`);
    cardBodyEl.append(nameEl)
    
    const jobEl = document.createElement('h4')
    jobEl.insertAdjacentHTML('beforeend', `${job}`);
    cardBodyEl.append(jobEl)

}

document.getElementById('newTeam').addEventListener('submit', function(e) {
    e.preventDefault()

    const randomImg = './assets/img/chopper.jpg'

    const newNameTeam = document.getElementById('newName').value
    console.log(newNameTeam);

    const newJobTeam = document.getElementById('newJob').value
    console.log(newJobTeam);

    // versione easy 
    markup(randomImg, newNameTeam, newJobTeam)





    //versione lunga 
   /*  const markupSecond =
    `
    <div class="col-4">
    <div class="card">
        <div class="card-img">
            <img class="img-fluid" src="${randomImg}" >
        </div>
        
        <div class="card-body">
        
            <h2>${newNameTeam}</h2>
            <h4>${newJobTeam}</h4>
        
        </div>
    </div>

</div>  
    
    `
    containerEl.insertAdjacentHTML('beforeend', markupSecond);
 */
    
})
