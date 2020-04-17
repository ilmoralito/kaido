// const ahora = new Date();
// const nombre = "Danilo";
// const edad = 19;
// const pasatiempos = ['jugar video juegos', 'escuchar musica'];

// pasatiempos.push('ver peliculas');
// pasatiempos.push('leer');

// console.log(pasatiempos[0]);
// console.log(pasatiempos[1]);
// console.log(pasatiempos[2]);
// console.log(pasatiempos[3]);

// for (const pasatiempo of pasatiempos) {
//     console.log(pasatiempo);
// }

// const alumnos = [
//   "ana",
//   "ricardo",
//   "marver",
//   "carlos",
//   "victor",
//   "jefferson",
//   "oscar",
// ];

// const resultado = alumnos.filter(alumno => alumno.length <= 6);
// const respuesta = resultado.map(alumno => alumno.length);

// console.log(resultado, respuesta);

const alumnos = [
  { age: 26, name: "ana", surname: "martinez", email: "ana.martinez@ulsa.edu.ni" },
  { age: 28, name: "ricardo", surname: "castillo", email: "ricardo.berrios@ulsa.edu.ni" },
  { age: 20, name: "oscar", surname: "amaya", email: "oscar.amaya@ulsa.edu.ni" },
  { age: 29, name: "jefferson", surname: "berrios", email: "jefferson.martinez@ulsa.edu.ni" },
  { age: 40, name: "marver", surname: "urcuyo", email: "marver.urcuyo@ulsa.edu.ni" },
  { age: 40, name: "carlos", surname: "suazo", email: "carlos.suazo@ulsa.edu.ni" },
  { age: 41, name: "victor", surname: "lopez", email: "ana.lopez@ulsa.edu.ni" },
];

const tbody = document.querySelector('tbody');

for (const alumno of alumnos) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdSurname = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdAge = document.createElement('td');

    tdName.textContent = alumno.name;
    tdSurname.textContent = alumno.surname;
    tdEmail.textContent = alumno.email;
    tdAge.textContent = alumno.age;

    tr.append(tdName);
    tr.append(tdSurname);
    tr.append(tdEmail);
    tr.append(tdAge);

    tbody.append(tr);
}

const resultado = alumnos.filter(alumno => alumno.age <= 30);
const respuesta = resultado.map(alumno => alumno.name);

for (const name of respuesta) {
    const option = document.createElement('option');

    option.textContent = name;

    document.querySelector('#names').append(option);
}

// console.log(respuesta);

// const respuesta = alumnos.filter(alumno => alumno.name.length <= 6);
// const resultado = respuesta.map(alumno => alumno.name.length);

// console.log(resultado);

// for (const alumno of alumnos) {
//     console.log(`${alumno.name} ${alumno.surname}`);
// }