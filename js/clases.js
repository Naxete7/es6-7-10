class Fighter {

    //Propiedades


    //Dentro del constructor vienen las propiedades dadas en la instancia

    constructor(nombre, ataque, defensa, suerte, agilidad) {

        //cualquier propiedad dentro de la clase viene referida con el this.
        this.vida = 100;
        this.stamina = 100;
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.suerte = suerte;
        this.agilidad = agilidad;

    }

    //Metodos

    golpear(enemigo) {
        enemigo.vida = enemigo.vida -= (this.ataque - enemigo.defensa) / enemigo.suerte * Math.floor(Math.random() * 10);


    };


    defenderse() {


    };

}


//instanciamos a 3 luchadores en 3 variables.
let luchador1 = new Fighter("Rey Misterio", 60, 40, 9, 80);
let luchador2 = new Fighter("Joan Macarra", 100, 20, 9, 90);
let luchador3 = new Fighter("Goku", 80, 35, 10, 60);
let luchador4 = new Fighter("Manuel Calavera", 10, 100, 10, 15);

console.log(luchador1);
console.log(luchador2);
console.log(luchador3);
console.log(luchador4);


luchador1.golpear(luchador2);

luchador2.golpear(luchador1);

console.log(luchador1);
console.log(luchador2);