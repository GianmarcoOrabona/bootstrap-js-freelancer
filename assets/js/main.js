// Prezzi per i vari lavori
let backendPrice = 20.50;
let frontendPrice = 15.30;
let projectAnalysis = 33.60;

// Array con i codici sconto
let discountCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24',];

let usedDiscountCodes = [];

let showPrice = document.getElementById('price');
let validation = document.getElementById('validation');
let usedDiscount = document.getElementById('used_discount');

// Funzione per calcolare il prezzo nel form
function getPrice(event) {
    event.preventDefault();

    showPrice.innerHTML = '';

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

    // Controllo se il codice sconto è tra quelli validi
    if (discountCode.includes(inputDiscountCode)) {
        if (usedDiscountCodes.includes(inputDiscountCode)) {
            usedDiscount.innerHTML = 'Questo codice sconto è già stato utilizzato.'
            console.log('Questo codice sconto è già stato utilizzato.');

            // Calcolo il prezzo in base al lavoro e alle ore
            if (typeOfWork == 'backend') {
                showPrice.innerHTML = `${name} ecco il tuo prezzo ${(backendPrice * hours).toFixed(2)} &euro;`
                console.log('Ecco il tuo prezzo: ' + (backendPrice * hours).toFixed(2));
            } else if (typeOfWork == 'frontend') {
                showPrice.innerHTML = `${name} ecco il tuo prezzo ${(frontendPrice * hours).toFixed(2)} &euro;`
                console.log('Ecco il tuo prezzo: ' + (frontendPrice * hours).toFixed(2))
            } else if (typeOfWork == 'analysis') {
                showPrice.innerHTML = `${name} ecco il tuo prezzo ${(projectAnalysis * hours).toFixed(2)} &euro;`
                console.log('Ecco il tuo prezzo: ' + (projectAnalysis * hours).toFixed(2))
            } else {
                validation.innerHTML = 'Inserisci le ore'
                console.log('Inserisci il numero di ore');
            }
        } else {
            // Aggiungi il codice sconto utilizzato
            usedDiscountCodes.push(inputDiscountCode);
            console.log('Sconto applicato.');

            // Calcolo il prezzo in base al lavoro e alle ore
            if (typeOfWork == 'backend') {
                showPrice.innerHTML = `${name} ecco il tuo prezzo ${((backendPrice * hours * 25) / 100).toFixed(2)} &euro;`
                console.log('Ecco il tuo prezzo: ' + ((backendPrice * hours * 25) / 100).toFixed(2));
            } else if (typeOfWork == 'frontend') {
                showPrice.innerHTML = `${name} ecco il tuo prezzo ${((frontendPrice * hours * 25) / 100).toFixed(2)} &euro;`
                console.log('Ecco il tuo prezzo: ' + ((frontendPrice * hours * 25) / 100).toFixed(2))
            } else if (typeOfWork == 'analysis') {
                showPrice.innerHTML = `${name} ecco il tuo prezzo ${((projectAnalysis * hours * 25) / 100).toFixed(2)} &euro;`
                console.log('Ecco il tuo prezzo: ' + ((projectAnalysis * hours * 25) / 100).toFixed(2))
            } else {
                validation.innerHTML = 'Inserisci le ore'
                console.log('Inserisci il numero di ore');
            }
        }
    } else if (inputDiscountCode == "") {
        // Calcolo il prezzo in base al lavoro e alle ore
        if (typeOfWork == 'backend') {
            showPrice.innerHTML = `${name} ecco il tuo prezzo ${(backendPrice * hours).toFixed(2)} &euro;`
            console.log('Ecco il tuo prezzo: ' + (backendPrice * hours).toFixed(2));
        } else if (typeOfWork == 'frontend') {
            showPrice.innerHTML = `${name} ecco il tuo prezzo ${(frontendPrice * hours).toFixed(2)} &euro;`
            console.log('Ecco il tuo prezzo: ' + (frontendPrice * hours).toFixed(2))
        } else if (typeOfWork == 'analysis') {
            showPrice.innerHTML = `${name} ecco il tuo prezzo ${(projectAnalysis * hours).toFixed(2)} &euro;`
            console.log('Ecco il tuo prezzo: ' + (projectAnalysis * hours).toFixed(2))
        } else {
            validation.innerHTML = 'Inserisci le ore'
            console.log('Inserisci il numero di ore');
        }
    }


};