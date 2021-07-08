//TODO 1. Creo variabili per nome passeggero, distanza, fascia di età e button della sezione 'Form'.
//TODO 2. Creo variabili per i dati nella sezione 'Printed Ticket'.
//TODO 3. Lego un evento al button per recuperare i dati inseriti dall'utente.
//TODO 4. All'interno dell'evento, creo nuove variabili per poter utilizzare i valori inseriti dall'utente nel form.
//TODO 5. Calcolo del prezzo e variabile tariffa

//! 1
var passengerNameField = document.getElementById('passenger-name');
var distanceKmField = document.getElementById('distance-km');
var ageRangeField = document.getElementById('age-range');
var buyTicket = document.getElementById('buy-ticket');

//! 2
var passengerNameTicket = document.getElementById('passenger-name-ticket');
var discountOffer = document.getElementById('discount-offer');
var carNumber = document.getElementById('car-number');
var trainNumber = document.getElementById('train-number');
var ticketPrice = document.getElementById('ticket-price');


//! 3 
buyTicket.addEventListener('click', function (){

    //! 4
    var passengerNameValue = passengerNameField.value;
    var distanceKmValue = distanceKmField.value;
    var ageRangeValue = ageRangeField.value;

    //! 5 
    var price = 0.21 * distanceKmValue;
    var offerDisplay = 'Tariffa ordinaria';



})