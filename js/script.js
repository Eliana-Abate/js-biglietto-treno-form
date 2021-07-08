//TODO 1. Creo variabili per nome passeggero, distanza, fascia di età e button della sezione 'Form'.
//TODO 2. Creo variabili per i dati nella sezione 'Printed Ticket'.
//TODO 3. Lego un evento al button per recuperare i dati inseriti dall'utente.
//TODO 4. All'interno dell'evento, creo nuove variabili per poter utilizzare i valori inseriti dall'utente nel form.
//TODO 5. Calcolo del prezzo e variabile tariffa.
//TODO 6. Condizione per verificare fascia di età e relativa tariffa.
//TODO 7. Arrotondo il prezzo a due decimali.
//TODO 8. Calcolo numero random per la carrozza e il codice treno.
//TODO 9. Stampo in Html.
//TODO 10. Creo variabile ed evento per resettare i campi del form.
//TODO 11. Creo variabile per modificare la visibilità della sezione ticket.

//! 1
var passengerNameField = document.getElementById('passenger-name');
var distanceKmField = document.getElementById('distance-km');
var ageRangeField = document.getElementById('age-range');
var buyTicket = document.getElementById('buy-ticket');
var resetButton = document.getElementById('reset');

//! 2
var passengerNameTicket = document.getElementById('passenger-name-ticket');
var discountOffer = document.getElementById('discount-offer');
var carNumber = document.getElementById('car-number');
var trainNumber = document.getElementById('train-number');
var ticketPrice = document.getElementById('ticket-price');
var ticketSection = document.getElementById('ticket-section');


//! 3 
buyTicket.addEventListener('click', function (){

    //! 4
    var passengerNameValue = passengerNameField.value;
    var distanceKmValue = distanceKmField.value;
    var ageRangeValue = ageRangeField.value;

    //! 5 
    var price = 0.21 * distanceKmValue;
    var offerDisplay = 'Tariffa ordinaria';

    //! 6 
    if (ageRangeValue === 'under-18') {
        price *= 0.80;
        offerDisplay = 'Tariffa Under 18';

    } else if (ageRangeValue === 'over-65') {
        price *= 0.60;
        offerDisplay = 'Tariffa Over 65';
    }

    //! 7
    price = price.toFixed(2) + ' Euro';

    //! 8 
    var randomCar = Math.floor(Math.random() * 12) + 1;
    var randomTrain = Math.floor(Math.random() * 999) + 9000;

    //! 9 
    passengerNameTicket.innerHTML = passengerNameValue;
    discountOffer.innerHTML = offerDisplay;
    carNumber.innerHTML = randomCar;
    trainNumber.innerHTML = randomTrain;
    ticketPrice.innerHTML = price;

    //! 11
    ticketSection.classList.remove('hidden');

});


//! 10
resetButton.addEventListener('click', function (){

    passengerNameField.value = '';
    distanceKmField.value = '2';
    ageRangeField.value = 'under-18';


    //! 11
    ticketSection.classList.add('hidden');
});