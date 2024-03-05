const userKm = parseInt(prompt('Km da percorrere'));
const userAge = parseInt(prompt('La tua età'));
const ticketPrice = 0.21 * userKm;
document.getElementById('price').innerHTML = 'Il prezzo del biglietto è: ' + (ticketPrice.toFixed(2)) + '€';
if (userAge < 18) {
    const discount20 = ticketPrice * 20 / 100;
    const userDiscount20 = ticketPrice - discount20;
    document.getElementById('price').innerHTML = 'Il prezzo del biglietto con il 20% di sconto è: ' + (userDiscount20.toFixed(2)) + '€';
    } else if (userAge > 65) {
        const discount40 = ticketPrice * 40 / 100;
        const userDiscount40 = ticketPrice - discount40;
        document.getElementById('price').innerHTML = 'Il prezzo del biglietto con il 40% di sconto è: ' + (userDiscount40.toFixed(2)) + '€';
    }  

