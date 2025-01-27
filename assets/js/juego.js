

let deck         = [];
const tipos      = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

let puntosJugador = 0; 
let puntosOrdenador = 0;
//Referencias del HTML

const btnPedir = document.querySelector("#btnPedir");
//console.log(btnPedir



//esta funcion crea una nueva baraja
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


    deck = _.shuffle(deck);
    // console.log(deck)

}


crearDeck();

//esta funcion te da una carta

const pedirCarta = () => {

    if (deck.length === 0){
        throw " No hay carta en el deck";
    }

    const carta = deck.pop();

    // console.log(deck)
    // console.log(carta)
    return carta;
}

//pedirCarta();

const valorCarta = (carta)=>{
    const valor = carta.substring(0, carta.length -1);
    return(isNaN( valor)) ?
        (valor === "A") ? 11 : 10 : valor * 1;

}

// const valor = valorCarta("QD");
// console.log({valor})


//Evento

btnPedir.addEventListener("click", () => {

    const carta = pedirCarta();
    console.log("click");
});



