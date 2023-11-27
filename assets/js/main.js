// Prezzi per i vari lavori
let backendPrice = 20.50;
let frontendPrice = 15.30;
let projectAnalysis = 33.60;

// Array con i codici sconto
let discountCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24',];

// Funzione per calcolare il prezzo nel form
function getPrice(event) {
    event.preventDefault();

    // Recupero i dati che mi servono dal form

    // Nome
    let name = document.getElementById('name').value;
    console.log(`Name: ${name}`);

    // Ore richieste
    let hours = document.getElementById('hours').value;
    console.log(`Hours: ${hours}`);

    // Tipo di lavoro
    let typeOfWork = document.getElementById('typeOfWork').value;
    console.log(`Type Of Work: ${typeOfWork}`);

    // Codice sconto
    let discountCode = document.getElementById('discount').value;
    console.log(`Discount code: ${discountCode}`);

};