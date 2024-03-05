// INFO DA OTTENERE
  //Numero km che vuole percorrere
  const userKm = parseInt(prompt('Km da percorrere'));
  console.log(userKm);
  //Età passeggero
  const userAge = parseInt(prompt('La tua età'));
  console.log(userAge);
//FUNZIONE PROGRAMMA
  //Calcolo prezzo totale del viaggio
    //Prezzo biglietto: 0.21$/km
    const ticketPrice = 0.21 * userKm;
    console.log(ticketPrice);
    document.getElementById('price').innerHTML = 'Il prezzo del biglietto è: ' + (ticketPrice.toFixed(2));
    //Sconto 20% minorenni
    if (userAge < 18) {
        const discount20 = ticketPrice * 20 / 100;
        console.log(discount20);
        const userDiscount20 = ticketPrice - discount20;
        console.log(userDiscount20);
    //OUTPUT
  //Prezzo con massimo i centesimi
        document.getElementById('price').innerHTML = 'Il prezzo del biglietto è: ' + (userDiscount20.toFixed(2));
    } else if (userAge > 65) {
        //sconto 40% over 65
        const discount40 = ticketPrice * 40 / 100;
        console.log(discount40);
        const userDiscount40 = ticketPrice - discount40;
        console.log(userDiscount40);
    //OUTPUT
  //Prezzo con massimo i centesimi
        document.getElementById('price').innerHTML = 'Il prezzo del biglietto è: ' + (userDiscount40.toFixed(2));
    }  
//OUTPUT
  //Prezzo con massimo i centesimi
