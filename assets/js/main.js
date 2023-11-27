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
    let inputDiscountCode = document.getElementById('discount').value;
    console.log(`Discount code: ${inputDiscountCode}`);

    // Calcolo il prezzo in base al lavoro e alle ore
    if (hours && typeOfWork == 'backend') {
        console.log('Ecco il tuo prezzo: ' + (backendPrice * hours).toFixed(2));
    } else if (hours && typeOfWork == 'frontend') {
        console.log('Ecco il tuo prezzo: ' + (frontendPrice * hours).toFixed(2))
    } else if (hours && typeOfWork == 'analysis') {
        console.log('Ecco il tuo prezzo: ' + (projectAnalysis * hours).toFixed(2))
    } else {
        console.log('Inserisci il numero di ore');
    }

    /* let usedDiscountCode = [];

    discountCode.forEach(function (element, index) {
        if (inputDiscountCode == discountCode[index]) {
            usedDiscountCode.push(discountCode[index])
            console.log('Sconto del 25%')
        } else {
            console.log('Inserisci un codice valido!')
        }
    }); */

};