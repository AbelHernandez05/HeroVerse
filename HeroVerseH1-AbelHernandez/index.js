class superHeroe{
    get personalidad() {
        return this._personalidad;
    }

    set personalidad(value) {
        this._personalidad = value;
    }
    get debilidad() {
        return this._debilidad;
    }

    set debilidad(value) {
        this._debilidad = value;
    }
    get superpoder() {
        return this._superpoder;
    }

    set superpoder(value) {
        this._superpoder = value;
    }
    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }
    constructor(nombre, superpoder, debilidad, personalidad){
        this._nombre = nombre;
        this._superpoder = superpoder;
        this._debilidad = debilidad;
        this._personalidad = personalidad;
    }
    toString() {
        return `${this._nombre} : ${this._superpoder} : ${this._debilidad} : ${this._personalidad}`;
    }


}

const heroe1 = new superHeroe("Patriota", "Volar", "Leche", "Egccentrico")
const heroe2 = new superHeroe("Centella", "Supervelocidad", "Agua", "Impulsivo");
const heroe3 = new superHeroe("Titanio", "Superfuerza", "Electricidad", "Valiente");
const heroe4 = new superHeroe("Sombra", "Invisibilidad", "Luz intensa", "Misterioso");
const heroe5 = new superHeroe("Acuática", "Controlar el agua", "Calor extremo", "Tranquila");
const heroe6 = new superHeroe("Voltio", "Controlar la electricidad", "Aislamiento", "Nervioso");
const heroe7 = new superHeroe("Fénix", "Regeneración", "Hielo", "Orgullosa");
const heroe8 = new superHeroe("Terremoto", "Controlar la tierra", "Falta de gravedad", "Gruñón");
const heroe9 = new superHeroe("MenteMaestra", "Telepatía", "Ruido mental", "Inteligente");
const heroe10 = new superHeroe("Fantasma", "Atravesar paredes", "Campos magnéticos", "Despreocupado");
const heroes = [heroe1, heroe2, heroe3, heroe4, heroe5, heroe6, heroe7, heroe8, heroe9, heroe10];
const arrAux=[];
//console.log(heroes[0].toString())

for (let i = 0; i < 5; i++) {
    let numero = Math.floor(Math.random() * heroes.length);
    while(arrAux.includes(heroes[numero])) {
        numero = Math.floor(Math.random() * heroes.length);
    }
    arrAux[i]=heroes[numero]
}

for (let i = 0; i < 5 ; i++) {
    console.log(arrAux[i].toString())
}