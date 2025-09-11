// Typescript playground: https://www.typescriptlang.org/play
// console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static
// forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// find(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// LECTURAS:
// https://www.w3schools.com/typescript/typescript_arrays.php
// https://www.w3schools.com/typescript/typescript_object_types.php
// https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
// https://www.w3schools.com/typescript/typescript_union_types.php
// https://www.w3schools.com/typescript/typescript_functions.php

// Más práctica online: https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1
// Triple igual en comparaciones: https://developer.mozilla.org/es/docs/Web/JavaScript/Equality_comparisons_and_sameness

// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()

let nombre: string = "Justina";
let edad: number = 26;
let esEstudiante: boolean = false;

console.log(
  `Hola, mi nombre es ${nombre}, tengo ${edad} años y ` +
    (esEstudiante ? "soy estudiante." : "no soy estudiante.")
);

// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.

function sumar(a: number, b: number): number {
  return a + b;
}
function restar(a: number, b: number): number {
  return a - b;
}
function multiplicar(a: number, b: number): number {
  return a * b;
}

console.log(sumar(5, 3));
console.log(restar(5, 3));
console.log(multiplicar(5, 3));

// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())

let numeros: number[] = [23, 547, 8331, 432, 598];
numeros.forEach((num) => console.log(num * 2));

// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.

interface Persona {
  nombre: string;
  edad: number;
  esEstudiante: boolean;
}

const persona1: Persona = { nombre: "Pepe", edad: 20, esEstudiante: true };
const persona2: Persona = { nombre: "Ricardo", edad: 50, esEstudiante: false };
const persona3: Persona = { nombre: "Juliana", edad: 35, esEstudiante: true };

console.log(persona1, persona2, persona3);

// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.

let variable: string | number;
variable = "Milanesa con puré";
console.log(variable);
variable = 4229;
console.log(variable);

// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock).
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock).
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

interface Producto {
  nombre: string;
  precio: number;
  enStock: boolean;
}

const productos: Producto[] = [
  { nombre: "Notebook", precio: 1000, enStock: true },
  { nombre: "Mouse", precio: 25, enStock: true },
  { nombre: "Teclado", precio: 30, enStock: false },
  { nombre: "Monitor", precio: 150, enStock: true },
  { nombre: "USB", precio: 10, enStock: false },
  { nombre: "Auriculares", precio: 50, enStock: true },
];

function productosEnStock(items: Producto[]): Producto[] {
  return items.filter((item) => item.enStock);
}

function productosSinStock(items: Producto[]): Producto[] {
  return items.filter((item) => !item.enStock);
}

console.log(productosEnStock(productos));
console.log(productosSinStock(productos));

// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado).
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido).
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

interface Cliente {
  nombre: string;
  edad: number;
  esClienteFrecuente: boolean;
  email: string;
}

const clientes: Cliente[] = [
  { nombre: "Ana", edad: 28, esClienteFrecuente: true, email: "ana@mail.com" },
  {
    nombre: "Luis",
    edad: 35,
    esClienteFrecuente: false,
    email: "luis@mail.com",
  },
  {
    nombre: "María",
    edad: 40,
    esClienteFrecuente: true,
    email: "maria@mail.com",
  },
  {
    nombre: "Pedro",
    edad: 22,
    esClienteFrecuente: false,
    email: "pedro@mail.com",
  },
  {
    nombre: "Sofia",
    edad: 31,
    esClienteFrecuente: true,
    email: "sofia@mail.com",
  },
  {
    nombre: "Juan",
    edad: 27,
    esClienteFrecuente: false,
    email: "juan@mail.com",
  },
];

function clientesFrecuentes(listaClientes: Cliente[]): Cliente[] {
  return listaClientes.filter((cliente) => cliente.esClienteFrecuente);
}

function clientesNoFrecuentes(listaClientes: Cliente[]): Cliente[] {
  return listaClientes.filter((cliente) => !cliente.esClienteFrecuente);
}

console.log(clientesFrecuentes(clientes));
console.log(clientesNoFrecuentes(clientes));

//Ejercicio 8: Catálogo de Productos - forEach
//Crear un array llamado catalogo con varios objetos de productos. Cada producto debe tener las propiedades nombre (string) y precio (number).
//Usar forEach para imprimir el nombre y el precio de cada producto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

interface ItemCatalogo {
  nombre: string;
  precio: number;
}

const catalogo: ItemCatalogo[] = [
  { nombre: "Libro", precio: 30 },
  { nombre: "Lapicera", precio: 5 },
  { nombre: "Mochila", precio: 60 },
  { nombre: "Cuaderno", precio: 75 },
];

catalogo.forEach((it) => console.log(`${it.nombre}: $${it.precio}`));

//Ejercicio 9: Catálogo de Productos - filter
//Utilizar filter para crear un nuevo array llamado productosBaratos que solo contenga los productos con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//Imprimir productosBaratos en la consola.

const productosBaratos = catalogo.filter((it) => it.precio < 50);
console.log(productosBaratos);

//Ejercicio 10: Actualización de Inventario - map
//Utilizar map para crear un nuevo array catalogoConDescuento, donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//Imprimir catalogoConDescuento en la consola.

const catalogoConDescuento = catalogo.map((p) => ({
  ...p,
  precio: p.precio * 0.9,
}));
console.log(catalogoConDescuento);

//Ejercicio 11: Búsqueda de Usuario - find
//Crear un array llamado usuarios con varios objetos de usuario. Cada usuario debe tener id (number), nombre (string) y activo (boolean).
//Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//Imprimir en la consola el objeto del usuario encontrado.

const usuarios = [
  { id: 1, nombre: "Pedro", activo: true },
  { id: 2, nombre: "Lucía", activo: false },
  { id: 3, nombre: "Martina", activo: true },
];

const usuario3 = usuarios.find((u) => u.id === 3);
console.log(usuario3);

//Ejercicio 12: Contador de Usuarios Activos - filter y length
//Utilizar filter para crear un nuevo array usuariosActivos que contenga solo los usuarios con activo: true.
//Usar la propiedad length para contar cuántos usuarios activos hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

const usuariosActivos = usuarios.filter((u) => u.activo);
console.log(`Usuarios activos: ${usuariosActivos.length}`);

//Ejercicio 13: Actualización de Estado de Usuarios
//Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
//Imprimir el array usuarios para verificar que todos los usuarios están inactivos.

usuarios.forEach((u) => (u.activo = false));
console.log(usuarios);

//Ejercicio 14: Formateo de Productos para Mostrar - map
//Usar el array catalogo.
//Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
//Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
//Imprimir el array productosFormato en la consola.

const productosFormato = catalogo.map(
  (p) => `Producto: ${p.nombre}, Precio: $${p.precio}`
);
console.log(productosFormato);

/*
Ejercicio 15:
Con los datos que tenemos, crear una interfaz "User" y aplicarla, para que el siguiente codigo compile sin errores:

const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: unknown) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
*/

interface User {
  name: string;
  age: number;
  occupation: string;
}

const users: User[] = [
  { name: "Max Mustermann", age: 25, occupation: "Chimney sweep" },
  { name: "Kate Müller", age: 23, occupation: "Astronaut" },
];

function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);

/*
Ejercicio 16:
Vamos a volver a usar la interfaz User del ejercicio anterior.
Crear una nueva interfaz Admin segun los datos que tenemos.
Corregir el type Person para que acepte dos tipos: User y la nueva interfaz. 
Corregir la implementacion para aplicar el type Person para que el siguiente codigo compile sin errores. 

type Person = User;
const persons: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
*/

interface Admin {
  name: string;
  age: number;
  role: string;
}

//Con type, se pueden crear combinaciones de tipos (con interfaces no)
type Person = User | Admin;

const persons: Person[] = [
  { name: "Max Mustermann", age: 25, occupation: "Chimney sweep" },
  { name: "Jane Doe", age: 32, role: "Administrator" },
  { name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { name: "Bruce Willis", age: 64, role: "World saver" },
];

function logPerson2(person: Person) {
  console.log(` - ${person.name}, ${person.age}`);
}

persons.forEach(logPerson2);
