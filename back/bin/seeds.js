const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Category = require("../models/Category");

const bcryptSalt = 10;

require("../configs/db.config");

Category.deleteMany()
.then(() => {
  return Category.create(categories)
})
.then(categoriesCreated => {
  console.log(`${categoriesCreated.length} categories created with the following id:`);
  console.log(categoriesCreated.map(u => u._id));
})
.then(() => {
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})

  let categories = [
    {
      // "_id": 1,
      "name": "Adicciones",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619745/causaImpacto/categories/category01_o1tols.png"
    },
    {
      // "_id": 2,
      "name": "Ayuda Humanitaria",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category02_l7uvnh.png"
    },
    {
      // "_id": 3,
      "name": "Consumo responsable",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category03_flrlvj.png"
    },
    {
      // "_id": 4,
      "name": "Cooperación al Desarrollo",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category04_jv9okk.png"
    },
    {
      // "_id": 5,
      "name": "Cultura y Arte Social",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category05_lcw9bb.png"
    },
    {
      // "_id": 6,
      "name": "Deportes",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category06_d3z2vd.png"
    },
    {
      // "_id": 7,
      "name": "Derechos Humanos",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category07_eiir0d.png"
    },
    {
      // "_id": 8,
      "name": "Infancia, juventud y familia",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category08_egreck.png"
    },
    {
      // "_id": 9,
      "name": "Mayores",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category09_nbzmxo.png"
    },
    {
      // "_id": 10,
      "name": "Medio Ambiente",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category10_cotyzd.png"
    },
    {
      // "_id": 11,
      "name": "Minorías Étnicas",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category11_laf1ho.png"
    },
    {
      // "_id": 12,
      "name": "Mujeres",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category12_xuuxw9.png"
    },
    {
      // "_id": 13,
      "name": "Personas con diversidad funcional",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category13_aydlgl.png"
    },
    {
      // "_id": 14,
      "name": "Personas en riesgo de exclusión",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category14_n3yen6.png"
    },
    {
      // "_id": 15,
      "name": "Personas en situación penitenciaria",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category15_wcrw18.png"
    },
    {
      // "_id": 16,
      "name": "Personas sin hogar",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category16_zcauxh.png"
    },
    {
      // "_id": 17,
      "name": "Salud",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category18_tijlzh.png"
    },
    {
      // "_id": 18,
      "name": "Sexualidades / Diversidad sexual",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category19_szfi1m.png"
    }
  ]
  
  User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})

let users = [
  {
    "confirmationCode": 1,
    "type": "donor",
    "status": "active",
    "username": "alicia",
    "email": "causaimpacto.ironhack@gmail.com",
    "password": bcrypt.hashSync("alicia", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    "confirmationCode": 2,
    "type": "donor",
    "status": "active",
    "username": "roberto",
    "email": "causaimpacto.ironhack@gmail.com",
    "password": bcrypt.hashSync("roberto", bcrypt.genSaltSync(bcryptSalt)),
  },
  {
    "confirmationCode": 3,
    "type": "organization",
    "username": "org0",
    "password": bcrypt.hashSync("org0", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Acción contra el Hambre",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org0_m1uyh5.jpg",
    "orgDescription": "Acción contra el Hambre es una organización humanitaria internacional, neutral e independiente que combate la desnutrición a la vez que garantiza agua y medios de vida seguros a las poblaciones más vulnerables. Nuestra misión es salvar vidas eliminando el hambre a través de la prevención, la detección y el tratamiento de la malnutrición. Desde las crisis hasta la sostenibilidad, enfrentamos las distintas causas de la malnutrición y sus efectos utilizando nuestro conocimiento y experiencia en nutrición, seguridad alimentaria, agua y saneamiento, salud e incidencia política. Todas nuestras actividades tratan de mantener y/o restaurar la dignidad humana. Nuestra visión es simple: un mundo sin hambre.",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34913915300",
    "orgEmail": "ach@achesp.org",
    "address": {
      "line1": "C/ Duque de Sevilla 3",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28002",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://www.accioncontraelhambre.org/es/",
    "orgLicense": "29/0968",
    "orgRegistrar": "Registro del Protectorado de Fundaciones",
    "orgCategories": ["5d9e2121e8afda188b34b1b2","5d9e2121e8afda188b34b1b4","5d9e2121e8afda188b34b1c2"]
  },
  {
    "confirmationCode": 4,
    "type": "organization",
    "username": "org1",
    "password": bcrypt.hashSync("org1", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Adopta Un Abuelo",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org1_w6snqj.jpg",
    "orgDescription": "Adoptaunabuelo.com es un programa de voluntariado de compañía para la tercera edad que facilita el contacto entre voluntarios y residencias a través de nuestra web. El objetivo principal es que el abuelo pueda compartir tiempo con un voluntario, sintiéndose escuchado, acompañado y querido. La iniciativa nace de la propia experiencia del emprendedor como voluntario de residencias. Tras conocer a Bernardo de 86 años, viudo y sin descendencia, decidió adoptarlo y le sirvió de inspiración para llevar a cabo este proyecto. Objetivos generales del proyecto 1) Implicación social de la población en la problemática de las personas mayores que padecen soledad. 2) Fomentar la relación intergeneracional con el objetivo del aprendizaje horizontal entre ambas partes a través del respeto y el amor. 3) Sensibilizar de la problemática actual que sufren las personas mayores que padecen soledad. 4) Formación, capacitación y acompañamiento a los voluntarios, personas mayores y residencias a lo largo del programa. Principales Acciones 1) Formación y seguimiento de los voluntarios y centros residenciales. 2) Establecimiento de convenios con las residencias de mayores participantes en el programa. 3) Reuniones de coordinación con los jóvenes y las residencias de mayores para evaluar la marcha del proyecto. 4) Reuniones internas entre los coordinadores del programa. 5) Fiesta final con todos los integrantes del voluntariado.",
    "orgContactPerson": "Admin",
    "orgEmail": "info@adoptaunabuelo.org",
    "address": {
      "line1": "C/ Aranjuez 11",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28039",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "http://www.adoptaunabuelo.com/",
    "orgCategories": ["5d9e2121e8afda188b34b1b9"]
  },
  {
    "confirmationCode": 5,
    "type": "organization",
    "username": "org2",
    "password": bcrypt.hashSync("org2", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "AECC Asociación Española Contra el Cáncer",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org2_yyciif.jpg",
    "orgDescription": "La AECC es una entidad privada, sin ánimo de lucro y declarada de “Utilidad Pública”, dedicada a actuar contra el cáncer en los siguientes ámbitos: investigación, prevención, información, diagnóstico precoz, asistencia psicológica, atención social y cuidados paliativos. Todo sus servicios son gratuitos.",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34900100036",
    "orgEmail": "informacion@aecc.es",
    "address": {
      "line1": "C/ Amador de los Ríos 5",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28010",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://www.aecc.es/",
    "orgLicense": "3827",
    "orgRegistrar": "Registro Nacional de Asociaciones",
    "orgCategories": ["5d9e2121e8afda188b34b1c2"]
  },
  {
    "confirmationCode": 6,
    "type": "organization",
    "username": "org3",
    "password": bcrypt.hashSync("org3", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Amnistía Internacional",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org3_qcwvvj.jpg",
    "orgDescription": "Trabajamos en favor de personas que necesitan ayuda. Nuestra fuerza es el poder de las personas que trabajan para ayudar a otras personas necesitadas de protección o apoyo.",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34913101277",
    "orgEmail": "info@es.amnesty.org",
    "address": {
      "line1": "C/ Fernando VI 8",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28004",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://www.es.amnesty.org/",
    "orgCategories": ["5d9e2121e8afda188b34b1b7"]
  },
  {
    "confirmationCode": 7,
    "type": "organization",
    "username": "org4",
    "password": bcrypt.hashSync("org4", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Asociación PAIDEIA",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org4_ucsjyz.jpg",
    "orgDescription": "Tenemos como fines la integración de menores, jóvenes y las familias, la mejora de su calidad de vida y la prevención e intervención en situaciones de riesgo, conflicto o dificultad social, manteniendo una actitud reflexiva y crítica en sus acciones.",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34914295132",
    "address": {
      "line1": "Plaza Tirso de Molina 13",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28012",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://asociacionpaideia.org/",
    "orgCategories": ["5d9e2121e8afda188b34b1b8", "5d9e2121e8afda188b34b1be"]
  },
  {
    "confirmationCode": 8,
    "type": "organization",
    "username": "org5",
    "password": bcrypt.hashSync("org5", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Cáritas",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org5_nfhgbf.png",
    "orgDescription": "En Cáritas promovemos el desarrollo integral de las personas y los pueblos, especialmente de los más pobres y excluidos.",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34914441000",
    "address": {
      "line1": "C/ de Embajadores 162",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28045",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://www.caritas.es/",
    "orgCategories": ["5d9e2121e8afda188b34b1b4","5d9e2121e8afda188b34b1be", "5d9e2121e8afda188b34b1c0"]
  },
  {
    "confirmationCode": 9,
    "type": "organization",
    "username": "org6",
    "password": bcrypt.hashSync("org6", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Cruz Roja Española",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org6_kygtuw.jpg",
    "orgDescription": "Los objetivos de Cruz Roja, son los siguientes: La búsqueda y fomento de la Paz, así como de la cooperación nacional e internacional. La prevención y la reparación de los daños originados por accidentes, catástrofes, siniestros, calamidades públicas, conflictos, enfermedades, epidemias y sucesos similares. La promoción y colaboración en programas de bienestar social, con especial atención a colectivos marginados o con dificultades para su integración social. El fomento y participación en programas de salud y en acciones que resulten convenientes para la sanidad pública. Aliviar los sufrimientos en casos de conflictos armados, situaciones de violencia o desórdenes de otro tipo, respetando y haciendo respetar el Derecho Internacional Humanitario.",
    "orgContactPerson": "Admin",
    "orgEmail": "informa@cruzroja.es",
    "address": {
      "line1": "C/ Ahijones",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28018",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://www.cruzroja.es/",
    "orgLicense": "E00006",
    "orgRegistrar": "Registro de entidades y servicios sociales",
    "orgCategories": ["5d9e2121e8afda188b34b1b2","5d9e2121e8afda188b34b1b4","5d9e2121e8afda188b34b1ba","5d9e2121e8afda188b34b1be","5d9e2121e8afda188b34b1c2"]
  },
  {
    "confirmationCode": 10,
    "type": "organization",
    "username": "org7",
    "password": bcrypt.hashSync("org7", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Federación Española de Párkinson",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org7_kqolf0.jpg",
    "orgDescription": "Nuestra misión es representar al movimiento asociativo en el ámbito estatal e internacional para la defensa de los intereses de las personas afectadas de párkinson.",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34914345371",
    "orgEmail": "info@esparkinson.es",
    "address": {
      "line1": "Paseo Ermita del Santo 5",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28011",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://www.esparkinson.es/",
    "orgCategories": ["5d9e2121e8afda188b34b1c2"]
  },
  {
    "confirmationCode": 11,
    "type": "organization",
    "username": "org8",
    "password": bcrypt.hashSync("org8", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Fundación Secretariado Gitano",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org8_afijzw.jpg",
    "orgDescription": "Fundación Secretariado Gitano",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34914220960",
    "orgEmail": "fsg@gitanos.org",
    "address": {
      "line1": "C/ Ahijones",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28018",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://www.gitanos.org/",
    "orgCategories": ["5d9e2121e8afda188b34b1bb"]
  },
  {
    "confirmationCode": 12,
    "type": "organization",
    "username": "org9",
    "password": bcrypt.hashSync("org9", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Save the Children España",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org9_nbthjp.jpg",
    "orgDescription": "Todos los niños y niñas merecen ver cumplidos sus derechos: crecer sanos, tener la oportunidad de aprender, y estar protegidos de la violencia. En situaciones de emergencia son los más vulnerables, por eso son nuestra prioridad. Trabajamos para que sus necesidades sean escuchadas y atendidas en las políticas públicas.",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34900373715",
    "address": {
      "line1": "C/ Doctor Esquerdo 138",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28007",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://www.savethechildren.es/",
    "orgLicense": "162",
    "orgRegistrar": "Registro de Fundaciones",
    "orgCategories": ["5d9e2121e8afda188b34b1b2","5d9e2121e8afda188b34b1b4","5d9e2121e8afda188b34b1b8","5d9e2121e8afda188b34b1be"]
  },
  {
    "confirmationCode": 13,
    "type": "organization",
    "username": "org10",
    "password": bcrypt.hashSync("org10", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "UNICEF",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org10_urq5ae.jpg",
    "orgDescription": "El Fondo de Naciones Unidas para la Infancia es un organismo dedicado a la protección y promoción de los derechos de la infancia. El Comité Español realiza actividades de sensibilización y recaudación de fondos para los programas de UNICEF.",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34913789555",
    "orgEmail": "unicef@unicef.es",
    "address": {
      "line1": "C/ Mauricio Legendre 36",
      "city": "Madrid",
      "stateOrProvince": "Madrid",
      "postalCode": "28046",
      "country": "España"
    },
    "status": "active",
    "orgUrl": "https://www.unicef.es/",
    "orgCategories": ["5d9e2121e8afda188b34b1b2","5d9e2121e8afda188b34b1b4","5d9e2121e8afda188b34b1b8","5d9e2121e8afda188b34b1be"]
  },
  {
    "confirmationCode": 14,
    "type": "organization",
    "username": "org11",
    "password": bcrypt.hashSync("org11", bcrypt.genSaltSync(bcryptSalt)),
    "email": "causaimpacto.ironhack@gmail.com",
    "orgName": "Oxfam Intermón",
    "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org11_wg2ku6.jpg",
    "orgDescription": "Oxfam Intermón somos personas que luchamos con, y para las poblaciones desfavorecidas, y como parte de un amplio movimiento global, con el objetivo de erradicar la injusticia y la pobreza, y para lograr que todos los seres humanos puedan ejercer plenamente sus derechos y disfrutar de una vida digna. Construimos un futuro sin pobreza.",
    "orgContactPerson": "Admin",
    "orgTelephone": "+34900223300",
    "orgEmail": "info@oxfamintermon.org",
    "address": {
      "line1": "Gran Vía de les Corts Catalanes 641",
      "city": "Barcelona",
      "stateOrProvince": "Barcelona",
      "postalCode": "08010",
      "country": "España"
          },
      "status": "active",
      "orgUrl": "https://www.oxfamintermon.org/es",
      "orgLicense": "259",
      "orgRegistrar": "Registro de Fundaciones Privadas de la Generalitat de Cataluña",
      "orgCategories": ["5d9e2121e8afda188b34b1b2","5d9e2121e8afda188b34b1b3","5d9e2121e8afda188b34b1b4","5d9e2121e8afda188b34b1b7"]
    },
    {
      "confirmationCode": 15,
      "type": "organization",
      "username": "org12",
      "password": bcrypt.hashSync("org12", bcrypt.genSaltSync(bcryptSalt)),
      "email": "causaimpacto.ironhack@gmail.com",
      "orgName": "ACNUR/UNHCR",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org12_hy6waq.jpg",
      "orgDescription": "El Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR, en inglés UNHCR, United Nations High Commissioner for Refugees) es el organismo de las Naciones Unidas encargado de proteger a los refugiados y desplazados por persecuciones o conflictos, y promover soluciones duraderas a su situación, mediante el reasentamiento voluntario en su país de origen o en el de acogida.",
      "orgContactPerson": "Admin",
      "orgTelephone": "+34915563649",
      "orgEmail": "spama@unhcr.org",
      "address": {
        "line1": "Avenida General Perón 32",
        "city": "Madrid",
        "stateOrProvince": "Madrid",
        "postalCode": "28020",
        "country": "España"
      },
      "status": "active",
      "orgUrl": "https://www.acnur.org/es-es/",
      "orgCategories": ["5d9e2121e8afda188b34b1b2","5d9e2121e8afda188b34b1b7","5d9e2121e8afda188b34b1ba","5d9e2121e8afda188b34b1be","5d9e2121e8afda188b34b1c2"]
    },
    {
      "confirmationCode": 16,
      "type": "organization",
      "username": "org13",
      "password": bcrypt.hashSync("org13", bcrypt.genSaltSync(bcryptSalt)),
      "email": "causaimpacto.ironhack@gmail.com",
      "orgName": "Confederación Española LGBT - colegas",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org13_e6yilu.png",
      "orgDescription": "Colegas – Confederación Española LGBT es una asociación que trabaja por la igualdad, de lesbianas, gais, bisexuales y transexuales en España. Se define como un proyecto asociativo autónomo e independiente y su objetivo principal es la promoción y defensa de los derechos de lesbianas, gais, bisexuales y transexuales, contribuyendo al libre desarrollo de las personas en sintonía consu orientación sexual o identidad de género.",
      "orgContactPerson": "Admin",
      "orgTelephone": "+34914388724",
      "orgEmail": "info@colegas.lgbt",
      "address": {
        "line1": "C/ Cabestreros 8",
        "city": "Madrid",
        "stateOrProvince": "Madrid",
        "postalCode": "28012",
        "country": "España"
      },
      "status": "active",
      "orgUrl": "http://www.colegas.lgbt",
      "orgCategories": ["5d9e2121e8afda188b34b1c3"]
    },
    {
      "confirmationCode": 17,
      "type": "organization",
      "username": "org14",
      "password": bcrypt.hashSync("org14", bcrypt.genSaltSync(bcryptSalt)),
      "email": "causaimpacto.ironhack@gmail.com",
      "orgName": "Médicos Sin Fronteras",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org14_bznjym.jpg",
      "orgDescription": "Somos una organización de acción médico-humanitaria: asistimos a personas amenazadas por conflictos armados, violencia, epidemias o enfermedades olvidadas, desastres naturales y exclusión de la atención médica. La acción humanitaria es un gesto solidario de sociedad civil a sociedad civil, de persona a persona, cuya finalidad es preservar la vida y aliviar el sufrimiento de otros seres humanos: esta es nuestra razón de ser.",
      "orgContactPerson": "Admin",
      "orgTelephone": "+34900494269",
      "orgEmail": "oficina@barcelona.msf.org",
      "address": {
        "line1": "C/ Zamora 54",
        "city": "Barcelona",
        "stateOrProvince": "Barcelona",
        "postalCode": "08005",
        "country": "España"
      },
      "status": "active",
      "orgUrl": "https://www.msf.es/",
      "orgCategories": ["5d9e2121e8afda188b34b1b2","5d9e2121e8afda188b34b1c2"]
    },
    {
      "confirmationCode": 18,
      "type": "organization",
      "username": "org15",
      "password": bcrypt.hashSync("org15", bcrypt.genSaltSync(bcryptSalt)),
      "email": "causaimpacto.ironhack@gmail.com",
      "orgName": "Manos Unidas",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org15_v8lhpy.jpg",
      "orgDescription": "Nuestra misión es la lucha contra el hambre, el subdesarrollo y la falta de instrucción y trabajar para erradicar las causas estructurales que las producen: la injusticia, el desigual reparto de los bienes y las oportunidades entre las personas y los pueblos, la ignorancia, los prejuicios, la insolidaridad, la indiferencia y la crisis de valores humanos y cristianos.",
      "orgContactPerson": "Admin",
      "orgTelephone": "+34900811888",
      "orgEmail": "info@manosunidas.org",
      "address": {
        "line1": "C/ Barquillo 38",
        "city": "Madrid",
        "stateOrProvince": "Madrid",
        "postalCode": "28004",
        "country": "España"
      },
      "status": "active",
      "orgUrl": "https://www.manosunidas.org/",
      "orgCategories": ["5d9e2121e8afda188b34b1b2","5d9e2121e8afda188b34b1b4"]
    },
    {
      "confirmationCode": 19,
      "type": "organization",
      "username": "org16",
      "password": bcrypt.hashSync("org16", bcrypt.genSaltSync(bcryptSalt)),
      "email": "causaimpacto.ironhack@gmail.com",
      "orgName": "Proyecto Hombre Madrid",
      "image": "https://res.cloudinary.com/dbklyksys/image/upload/v1570642341/causaImpacto/orgLogo/org16_itxcxp.png",
      "orgDescription": "Proyecto Hombre Madrid es una organización sin ánimo de lucro que trabaja para ayudar a las personas en dificultad o en desventaja social, contribuyendo a que puedan desarrollarse personalmente, recobren su autonomía y se integren en la sociedad, a través de programas y acciones terapéutico-educativas estructuradas según las necesidades de los diferentes perfiles: (1) Personas con problemas de adicción (con y sin sustancia) (2) Menores y jóvenes en dificultad y/o conflicto social. (3) Otros sectores de la población en situación de necesidad (inmigrantes, mujeres en dificultad social, reclusos, exreclusos, etc.)",
      "orgContactPerson": "Admin",
      "orgTelephone": "+34915420271",
      "orgEmail": "info@proyectohombremadrid.org",
      "address": {
        "line1": "C/ Martín de los Heros 68",
        "city": "Madrid",
        "stateOrProvince": "Madrid",
        "postalCode": "28008",
        "country": "España"
      },
      "status": "active",
      "orgUrl": "https://www.accioncontraelhambre.org/es/",
      "orgCategories": ["5d9e2121e8afda188b34b1b1","5d9e2121e8afda188b34b1b8","5d9e2121e8afda188b34b1bc","5d9e2121e8afda188b34b1be","5d9e2121e8afda188b34b1bf","5d9e2121e8afda188b34b1c0"]
    }
]