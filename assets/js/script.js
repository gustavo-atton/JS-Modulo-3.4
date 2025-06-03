//OBJETOS VENTAS

const propiedadesVentas = [
  {
    nombre: "Amplia Casa En Barrio Universitario, Concepcion",
    src: "./assets/img/05.jpg",
    descripcion:
      "Casa en perfecto estado de conservación. Ubicada en un barrio consolidado, de alta plusvalía muy seguro destaca por tener muy buena iluminación y excelente conectividad.",
    ubicacion: "Concepción, Chile",
    habitaciones: 11,
    bano: 10,
    costo: 450,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa En Plaza Don Bosco, Concepción",
    src: "./assets/img/05.jpg",
    descripcion:
      "Preciosa casa esquina, ubicada en sector Plaza Don Bosco en Concepción en dos pisos.",
    ubicacion: "Barrio Oriente, Concepcion, Chile",
    habitaciones: 11,
    bano: 3,
    costo: 600,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa Venta Sector Collao, Concepción",
    src: "./assets/img/07.jpg",
    descripcion:
      "Encantadora residencia de 120 metros cuadrados, construida en albañilería reforzada",
    ubicacion: "Collao, Concepción",
    habitaciones: 4,
    bano: 3,
    costo: 700,
    smoke: true,
    pets: true,
  },
  {
    nombre: " Estupenda Casa El Venado, San Pedro De La Paz",
    src: "./assets/img/08.jpg",
    descripcion:
      "Ubicada en una calle cerrada, frente a pequeña plaza. A pasos de los colegios Inglés y Alemán, en un sector privilegiado, ideal para familias.",
    ubicacion: "San Pedro de la Paz, Concepción",
    habitaciones: 4,
    bano: 3,
    costo: 500,
    smoke: true,
    pets: true,
  },
];

//OBJETOS ALQUILER

const propiedadesAlquiler = [
  {
    nombre: "Cabaña con tinaja, Pinto ",
    src: "./assets/img/01.jpg",
    descripcion:
      "Relájate con toda la familia en este tranquilo lugar para disfrutar. Acogedora cabaña con tinaja y home office para teletrabajar con vista al río Diguillín.",
    ubicacion: "Pinto, Chile",
    habitaciones: 2,
    bano: 1,
    costo: 120,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Cabaña, Termas de Chillan ",
    src: "./assets/img/02.jpg",
    descripcion:
      "Acogedora cabaña inmersa en 6 hectáreas de Naturaleza, privacidad total. A 20 minutos de centro de ski, Termas de Chillán, 5-10 minutos de restoranes, bares y atracciones locales.",
    ubicacion: "Recinto, Chile",
    habitaciones: 3,
    bano: 2,
    costo: 200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Cabaña en Valle Las Trancas",
    src: "./assets/img/03.jpg",
    descripcion:
      "Ideal para familias y amigos que quierán venir a descubrir la magia del lugar o bien a descansar. Durante todo el año existen diversas actividades por hacer y lugares que visitar para comer y disfrutar.",
    ubicacion: "Las Trancas, Chile",
    habitaciones: 2,
    bano: 1,
    costo: 100,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Naturaleza de Lujo en un Domo, Las Trancas",
    src: "./assets/img/04.jpg",
    descripcion:
      " Disfruta de la naturaleza en nuestros cómodos domos con vistas al bosque nativo. Ideal para familias que buscan estar en contacto con la naturaleza y realizar actividades al aire libre y visitar las atracciones turísticas.",
    ubicacion: "Pinto, Chile",
    habitaciones: 2,
    bano: 1,
    costo: 150,
    smoke: true,
    pets: false,
  },
];

/*=====> VARIABLES DIV HOME*/

let todasLasVentas = document.getElementById("todasLasVentas");
let homeventa = document.getElementById("divhomeventa");
let homealquiler = document.getElementById("divhomealquiler");

/* ======>>>> Funcion PLANTILLA DIV VENTAS */

function mostrarPropVenta(array, receptor, numero) {
  let plantilla = `<div class='cards'>`;

  for (let elemento of array.slice(0, numero)) {
    plantilla += `
 <div class="card">
        <h3>${elemento.nombre}</h3>
        <img src="${elemento.src}" alt="${elemento.nombre}" />
        <p>${elemento.descripcion}</p>
        <p><strong>Ubicación:</strong> <i class="fas fa-map-marker-alt"></i> ${
          elemento.ubicacion
        } </p>
        <p><strong>Habitaciones:</strong> <i class="fas fa-bed"></i> ${
          elemento.habitaciones
        }  |  <strong>Baños:</strong> <i class="fas fa-bath"></i> ${
      elemento.bano
    }</p>
        <p><strong>Costo:</strong> <i class="fas fa-dollar-sign"></i> $${
          elemento.costo
        } Millones</p>
        <div class="smoke">
          ${
            elemento.smoke
              ? `<p class='fumar'><i class="fas fa-smoking"></i> Se puede fumar</p>`
              : `<p class='nofumar'><i class="fas fa-smoking-ban"></i> NO se puede fumar</p>`
          }
        </div>
        <div class="pet">
          ${
            elemento.pets
              ? `<p class='mascotas'><i class="fas fa-paw"></i> Se permiten mascotas</p>`
              : `<p class='sinMascotas'><i class="fa-solid fa-ban"></i> NO se permiten mascotas</p>`
          }
        </div>
      </div>
    `;
  }

  plantilla += `</div>`;
  receptor.innerHTML = plantilla;
}

/* ======>>>> Funcion PLANTILLA DIV Alquiler */

function mostrarPropAlquiler(array, receptor, numero) {
  let plantilla = `<div class='cards'>`;

  for (let elemento of array.slice(0, numero)) {
    plantilla += `
 <div class="card">
        <h3>${elemento.nombre}</h3>
        <img src="${elemento.src}" alt="${elemento.nombre}" />
        <p>${elemento.descripcion}</p>
        <p><strong>Ubicación:</strong> <i class="fas fa-map-marker-alt"></i> ${
          elemento.ubicacion
        } </p>
        <p><strong>Habitaciones:</strong> <i class="fas fa-bed"></i> ${
          elemento.habitaciones
        }  |  <strong>Baños:</strong> <i class="fas fa-bath"></i> ${
      elemento.bano
    }</p>
        <p><strong>Costo:</strong> <i class="fas fa-dollar-sign"></i> $${
          elemento.costo
        } | Mil Diario</p>
        <div class="smoke">
          ${
            elemento.smoke
              ? `<p class='fumar'><i class="fas fa-smoking"></i> Se puede fumar</p>`
              : `<p class='nofumar'><i class="fas fa-smoking-ban"></i> NO se puede fumar</p>`
          }
        </div>
        <div class="pet">
          ${
            elemento.pets
              ? `<p class='mascotas'><i class="fas fa-paw"></i> Se permiten mascotas</p>`
              : `<p class='sinMascotas'><i class="fa-solid fa-ban"></i> NO se permiten mascotas</p>`
          }
        </div>
      </div>
    `;
  }

  plantilla += `</div>`;
  receptor.innerHTML = plantilla;
}


// VARIABLES cada PAGINA

let paginaVentas = document.getElementById("paginaVentas");

let paginaAlquiler = document.getElementById("paginaAlquiler");

//Condicion para validar id

/* if (homeventa && homealquiler) {
  mostrarPropVenta(propiedadesVentas, homeventa, 3),
    mostrarPropAlquiler(propiedadesAlquiler, homealquiler, 3);
} else {
}

if (paginaVentas) {
  mostrarPropVenta(propiedadesVentas, paginaVentas);
} else {
}

if (paginaAlquiler) {
  mostrarPropAlquiler(propiedadesAlquiler, paginaAlquiler);
} else {
} */

//ESCRITO EN OPERADOR TERNARIO

homeventa && homealquiler
  ? (mostrarPropVenta(propiedadesVentas, homeventa, 3),
     mostrarPropAlquiler(propiedadesAlquiler, homealquiler, 3))
  : null;

paginaVentas
  ? mostrarPropVenta(propiedadesVentas, paginaVentas)
  : null;

paginaAlquiler
  ? mostrarPropAlquiler(propiedadesAlquiler, paginaAlquiler)
  : null;

