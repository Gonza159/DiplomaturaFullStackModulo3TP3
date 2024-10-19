/*Codigo viejo
import { leerSuperheroes } from './utils.mjs';

// Leer y mostrar la lista de superhéroes ordenada const superheroes leer Superheroes('./superheroes.txt');
const superheroes = leerSuperheroes('./superheroes.txt'); 
console.log('Superhéroes ordenados:'); 
console.log(superheroes);
*/

import { leerSuperheroes, agregarSuperheroes } from './utils.mjs'; 

const archivoOriginal = './superheroes.txt'; 
const archivoNuevos = './agregarSuperheroes.txt'; 

// Agregar nuevos superhéroes 
agregarSuperheroes (archivoOriginal, archivoNuevos); 

// Leer y mostrar la lista actualizada de superhéroes ordenada const superheroes = leer Superheroes (archivoOriginal); 
const superheroes = leerSuperheroes (archivoOriginal); 
console.log('Superhéroes ordenados:'); 
console.log(superheroes);