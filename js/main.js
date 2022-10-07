// BUCLE FOR SIMPLE

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// };


// BUCLE FOR OF (cuando usemos una array u objetos literales)

// let videojuegos = ["dota 2", "quake", "doom"];


// //por cada joc de videojuegos...el bucle da una vuelta
// for (let joc of videojuegos) {
//     console.log(joc);
// };

//BUCLE FOR IN (cuando de un iterable queremos saber el indice que ocupa)

// let videojuegos = ["wow", "diablo2", "owerwatch"];

// for (let indice in videojuegos) {
//     console.log(indice);

// };
// //ES LO MISMO QUE ESTO

// for (let i = 0; i < videojuegos.length; i++) {
//     console.log(i);
// };

//BUCLE FOR EACH (modifica el array)

// let videojuegos = ["Fifa", "nba", "callofduty"];

// videojuegos.forEach(xoc => console.log(xoc));
// //MAP ( no modifica el array)
// videojuegos.map(juego => console.log(juego));

///////////////////////////////////////////////////////////////////////////////////////////////////////

//OBJETOS LITERALES 

let jose = {
    edad: 21,
    nacionalidad: "Española",
    nombre: "Jose",
    residencia: "Nazaret",
    hobbies: {
        hobbie1: "anime",
        hobbie2: "lol",
        hobbie3: "mascotas",
        hobbie4: "programar"
    }
}