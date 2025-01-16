

let deck         = [];
const tipos      = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for(let tipo of tipos){
            deck.push(i + tipo); 
        }
    }

    for(let esp of especiales){
        for(let tipo of tipos){
            deck.push(esp + tipo)
        }
    }

    console.log(deck);

}


crearDeck();

//50. Crear baraja de cartas


// como hacer el For y el For In
