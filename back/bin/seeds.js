const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Category = require("../models/Category");
const Campaign = require("../models/Campaign");
const SingleDonation = require("../models/SingleDonation");

const bcryptSalt = 10;

require("../configs/db.config");

Category.deleteMany()
  .then(() => {
    return Category.create(categories);
  })
  .then(categoriesCreated => {
    console.log(
      `${categoriesCreated.length} categories created with the following id:`
    );
    console.log(categoriesCreated.map(u => u._id));
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });

let categories = [
  {
    _id: "5da576bb27efb808bfc82508",
    name: "Adicciones",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619745/causaImpacto/categories/category01_o1tols.png"
  },
  {
    _id: "5da576bb27efb808bfc82509",
    name: "Ayuda Humanitaria",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category02_l7uvnh.png"
  },
  {
    _id: "5da576bb27efb808bfc8250a",
    name: "Consumo responsable",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category03_flrlvj.png"
  },
  {
    _id: "5da576bb27efb808bfc8250b",
    name: "Cooperación al Desarrollo",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category04_jv9okk.png"
  },
  {
    _id: "5da576bb27efb808bfc8250c",
    name: "Cultura y Arte Social",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category05_lcw9bb.png"
  },
  {
    _id: "5da576bb27efb808bfc8250d",
    name: "Deportes",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category06_d3z2vd.png"
  },
  {
    _id: "5da576bb27efb808bfc8250e",
    name: "Derechos Humanos",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category07_eiir0d.png"
  },
  {
    _id: "5da576bb27efb808bfc8250f",
    name: "Infancia, juventud y familia",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category08_egreck.png"
  },
  {
    _id: "5da576bb27efb808bfc82510",
    name: "Mayores",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category09_nbzmxo.png"
  },
  {
    _id: "5da576bb27efb808bfc82511",
    name: "Medio Ambiente",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category10_cotyzd.png"
  },
  {
    _id: "5da576bb27efb808bfc82512",
    name: "Minorías Étnicas",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category11_laf1ho.png"
  },
  {
    _id: "5da576bb27efb808bfc82513",
    name: "Mujeres",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619746/causaImpacto/categories/category12_xuuxw9.png"
  },
  {
    _id: "5da576bb27efb808bfc82514",
    name: "Personas con diversidad funcional",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category13_aydlgl.png"
  },
  {
    _id: "5da576bb27efb808bfc82515",
    name: "Personas en riesgo de exclusión",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category14_n3yen6.png"
  },
  {
    _id: "5da576bb27efb808bfc82516",
    name: "Personas en situación penitenciaria",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category15_wcrw18.png"
  },
  {
    _id: "5da576bb27efb808bfc82517",
    name: "Personas sin hogar",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category16_zcauxh.png"
  },
  {
    _id: "5da576bb27efb808bfc82518",
    name: "Salud",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category18_tijlzh.png"
  },
  {
    _id: "5da576bb27efb808bfc82519",
    name: "Sexualidades / Diversidad sexual",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570619747/causaImpacto/categories/category19_szfi1m.png"
  }
];

User.deleteMany()
  .then(() => {
    return User.create(users);
  })
  .then(usersCreated => {
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });

let users = [
  {
    _id: "5da576bb27efb808bfc824f6",
    confirmationCode: 1,
    type: "donor",
    status: "active",
    username: "alicia",
    email: "causaimpacto.ironhack@gmail.com",
    password: bcrypt.hashSync("alicia", bcrypt.genSaltSync(bcryptSalt)),
    userFirstname: "Alicia",
    userSurname: "Pérez",
    userAmountDonated: 280,
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1571127558/causaImpacto/alicia_profile_c1lpro.png",
    address: {
      line1: "Calle Unicornio 2",
      line2: "Escalera A, Piso 3D",
      city: "Dreamcity",
      stateOrProvince: "Dream State",
      postalCode: "12345",
      country: "Wonderland"
    },
    userDonations: [
      "5da591206480c70da3e1904b",
      "5da591206480c70da3e1904c",
      "5da591206480c70da3e1904d"
    ],
    userInterests: ["5da576bb27efb808bfc82509","5da576bb27efb808bfc8250b","5da576bb27efb808bfc82518"]
  },
  {
    _id: "5da576bb27efb808bfc824f7",
    confirmationCode: 2,
    type: "donor",
    status: "active",
    username: "roberto",
    email: "causaimpacto.ironhack@gmail.com",
    password: bcrypt.hashSync("roberto", bcrypt.genSaltSync(bcryptSalt)),
    userFirstname: "Roberto",
    userSurname: "García",
    userAmountDonated: 90,
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1571127558/causaImpacto/roberto_profile_u4hskg.png",
    address: {
      line1: "Calle Unicornio 2",
      line2: "Escalera A, Piso 3I",
      city: "Dreamcity",
      stateOrProvince: "Dream State",
      postalCode: "12345",
      country: "Wonderland"
    },
    userDonations: [
      "5da591206480c70da3e1904e",
      "5da591206480c70da3e1904f",
      "5da591206480c70da3e19050"
    ],
    userInterests: ["5da576bb27efb808bfc8250f","5da576bb27efb808bfc82518"]
  },
  {
    _id: "5da576bb27efb808bfc824f8",
    confirmationCode: 3,
    type: "organization",
    username: "org0",
    password: bcrypt.hashSync("org0", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Acción contra el Hambre",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org0_m1uyh5.jpg",
    orgDescription:
      "Acción contra el Hambre es una organización humanitaria internacional, neutral e independiente que combate la desnutrición a la vez que garantiza agua y medios de vida seguros a las poblaciones más vulnerables. Nuestra misión es salvar vidas eliminando el hambre a través de la prevención, la detección y el tratamiento de la malnutrición. Desde las crisis hasta la sostenibilidad, enfrentamos las distintas causas de la malnutrición y sus efectos utilizando nuestro conocimiento y experiencia en nutrición, seguridad alimentaria, agua y saneamiento, salud e incidencia política. Todas nuestras actividades tratan de mantener y/o restaurar la dignidad humana. Nuestra visión es simple: un mundo sin hambre.",
    orgContactPerson: "Admin",
    orgTelephone: "+34913915300",
    orgEmail: "ach@achesp.org",
    address: {
      line1: "C/ Duque de Sevilla 3",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28002",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.accioncontraelhambre.org/es/",
    orgLicense: "29/0968",
    orgRegistrar: "Registro del Protectorado de Fundaciones",
    orgCategories: [
      "5da576bb27efb808bfc82509",
      "5da576bb27efb808bfc8250b",
      "5da576bb27efb808bfc8250e"
    ]
  },
  {
    _id: "5da576bb27efb808bfc824f9",
    confirmationCode: 4,
    type: "organization",
    username: "org1",
    password: bcrypt.hashSync("org1", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Adopta Un Abuelo",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org1_w6snqj.jpg",
    orgDescription:
      "Adoptaunabuelo.com es un programa de voluntariado de compañía para la tercera edad que facilita el contacto entre voluntarios y residencias a través de nuestra web.",   
    orgContactPerson: "Admin",
    orgEmail: "info@adoptaunabuelo.org",
    address: {
      line1: "C/ Aranjuez 11",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28039",
      country: "España"
    },
    status: "active",
    orgUrl: "http://www.adoptaunabuelo.com/",
    orgCategories: ["5da576bb27efb808bfc82510"]
  },
  {
    _id: "5da576bb27efb808bfc824fa",
    confirmationCode: 5,
    type: "organization",
    username: "org2",
    password: bcrypt.hashSync("org2", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "AECC Asociación Española Contra el Cáncer",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org2_yyciif.jpg",
    orgDescription:
      "La AECC es una entidad privada, sin ánimo de lucro y declarada de “Utilidad Pública”, dedicada a actuar contra el cáncer en los siguientes ámbitos: investigación, prevención, información, diagnóstico precoz, asistencia psicológica, atención social y cuidados paliativos. Todo sus servicios son gratuitos.",
    orgContactPerson: "Admin",
    orgTelephone: "+34900100036",
    orgEmail: "informacion@aecc.es",
    address: {
      line1: "C/ Amador de los Ríos 5",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28010",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.aecc.es/",
    orgLicense: "3827",
    orgRegistrar: "Registro Nacional de Asociaciones",
    orgCategories: ["5da576bb27efb808bfc82518"],
    orgDonations: ["5da591206480c70da3e19050"]
  },
  {
    _id: "5da576bb27efb808bfc824fb",
    confirmationCode: 6,
    type: "organization",
    username: "org3",
    password: bcrypt.hashSync("org3", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Amnistía Internacional",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org3_qcwvvj.jpg",
    orgDescription:
      "Trabajamos en favor de personas que necesitan ayuda. Nuestra fuerza es el poder de las personas que trabajan para ayudar a otras personas necesitadas de protección o apoyo.",
    orgContactPerson: "Admin",
    orgTelephone: "+34913101277",
    orgEmail: "info@es.amnesty.org",
    address: {
      line1: "C/ Fernando VI 8",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28004",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.es.amnesty.org/",
    orgCategories: ["5da576bb27efb808bfc8250e"]
  },
  {
    _id: "5da576bb27efb808bfc824fc",
    confirmationCode: 7,
    type: "organization",
    username: "org4",
    password: bcrypt.hashSync("org4", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Asociación PAIDEIA",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org4_ucsjyz.jpg",
    orgDescription:
      "Tenemos como fines la integración de menores, jóvenes y las familias, la mejora de su calidad de vida y la prevención e intervención en situaciones de riesgo, conflicto o dificultad social, manteniendo una actitud reflexiva y crítica en sus acciones.",
    orgContactPerson: "Admin",
    orgTelephone: "+34914295132",
    address: {
      line1: "Plaza Tirso de Molina 13",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28012",
      country: "España"
    },
    status: "active",
    orgUrl: "https://asociacionpaideia.org/",
    orgCategories: ["5da576bb27efb808bfc8250f", "5da576bb27efb808bfc82515"]
  },
  {
    _id: "5da576bb27efb808bfc824fd",
    confirmationCode: 8,
    type: "organization",
    username: "org5",
    password: bcrypt.hashSync("org5", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Cáritas",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org5_nfhgbf.png",
    orgDescription:
      "En Cáritas promovemos el desarrollo integral de las personas y los pueblos, especialmente de los más pobres y excluidos.",
    orgContactPerson: "Admin",
    orgTelephone: "+34914441000",
    address: {
      line1: "C/ de Embajadores 162",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28045",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.caritas.es/",
    orgCategories: [
      "5da576bb27efb808bfc82515",
      "5da576bb27efb808bfc82517",
      "5da576bb27efb808bfc82509"
    ]
  },
  {
    _id: "5da576bb27efb808bfc824fe",
    confirmationCode: 9,
    type: "organization",
    username: "org6",
    password: bcrypt.hashSync("org6", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Cruz Roja Española",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org6_kygtuw.jpg",
    orgDescription:
      "Los objetivos de Cruz Roja, son los siguientes: La búsqueda y fomento de la Paz, así como de la cooperación nacional e internacional. La prevención y la reparación de los daños originados por accidentes, catástrofes, siniestros, calamidades públicas, conflictos, enfermedades, epidemias y sucesos similares. La promoción y colaboración en programas de bienestar social, con especial atención a colectivos marginados o con dificultades para su integración social. El fomento y participación en programas de salud y en acciones que resulten convenientes para la sanidad pública. Aliviar los sufrimientos en casos de conflictos armados, situaciones de violencia o desórdenes de otro tipo, respetando y haciendo respetar el Derecho Internacional Humanitario.",
    orgContactPerson: "Admin",
    orgEmail: "informa@cruzroja.es",
    address: {
      line1: "C/ Ahijones",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28018",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.cruzroja.es/",
    orgLicense: "E00006",
    orgRegistrar: "Registro de entidades y servicios sociales",
    orgCategories: [
      "5da576bb27efb808bfc82509",
      "5da576bb27efb808bfc8250b",
      "5da576bb27efb808bfc8250e",
      "5da576bb27efb808bfc82515",
      "5da576bb27efb808bfc82517"
    ]
  },
  {
    _id: "5da576bb27efb808bfc824ff",
    confirmationCode: 10,
    type: "organization",
    username: "org7",
    password: bcrypt.hashSync("org7", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Federación Española de Párkinson",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642339/causaImpacto/orgLogo/org7_kqolf0.jpg",
    orgDescription:
      "Nuestra misión es representar al movimiento asociativo en el ámbito estatal e internacional para la defensa de los intereses de las personas afectadas de párkinson.",
    orgContactPerson: "Admin",
    orgTelephone: "+34914345371",
    orgEmail: "info@esparkinson.es",
    address: {
      line1: "Paseo Ermita del Santo 5",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28011",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.esparkinson.es/",
    orgCategories: ["5da576bb27efb808bfc82518"]
  },
  {
    _id: "5da576bb27efb808bfc82500",
    confirmationCode: 12,
    type: "organization",
    username: "org9",
    password: bcrypt.hashSync("org9", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Save the Children España",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org9_nbthjp.jpg",
    orgDescription:
      "Todos los niños y niñas merecen ver cumplidos sus derechos: crecer sanos, tener la oportunidad de aprender, y estar protegidos de la violencia. En situaciones de emergencia son los más vulnerables, por eso son nuestra prioridad. Trabajamos para que sus necesidades sean escuchadas y atendidas en las políticas públicas.",
    orgContactPerson: "Admin",
    orgTelephone: "+34900373715",
    address: {
      line1: "C/ Doctor Esquerdo 138",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28007",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.savethechildren.es/",
    orgLicense: "162",
    orgRegistrar: "Registro de Fundaciones",
    orgCategories: [
      "5da576bb27efb808bfc82509",
      "5da576bb27efb808bfc8250b",
      "5da576bb27efb808bfc8250e",
      "5da576bb27efb808bfc8250f"
    ]
  },
  {
    _id: "5da576bb27efb808bfc82501",
    confirmationCode: 13,
    type: "organization",
    username: "org10",
    password: bcrypt.hashSync("org10", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "UNICEF",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org10_urq5ae.jpg",
    orgDescription:
      "El Fondo de Naciones Unidas para la Infancia es un organismo dedicado a la protección y promoción de los derechos de la infancia. El Comité Español realiza actividades de sensibilización y recaudación de fondos para los programas de UNICEF.",
    orgContactPerson: "Admin",
    orgTelephone: "+34913789555",
    orgEmail: "unicef@unicef.es",
    address: {
      line1: "C/ Mauricio Legendre 36",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28046",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.unicef.es/",
    orgCategories: [
      "5da576bb27efb808bfc82509",
      "5da576bb27efb808bfc8250b",
      "5da576bb27efb808bfc8250e",
      "5da576bb27efb808bfc8250f"
    ],
    orgDonations: ["5da591206480c70da3e1904e"]
  },
  {
    _id: "5da576bb27efb808bfc82502",
    confirmationCode: 14,
    type: "organization",
    username: "org11",
    password: bcrypt.hashSync("org11", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Oxfam Intermón",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org11_wg2ku6.jpg",
    orgDescription:
      "Oxfam Intermón somos personas que luchamos con, y para las poblaciones desfavorecidas, y como parte de un amplio movimiento global, con el objetivo de erradicar la injusticia y la pobreza, y para lograr que todos los seres humanos puedan ejercer plenamente sus derechos y disfrutar de una vida digna. Construimos un futuro sin pobreza.",
    orgContactPerson: "Admin",
    orgTelephone: "+34900223300",
    orgEmail: "info@oxfamintermon.org",
    address: {
      line1: "Gran Vía de les Corts Catalanes 641",
      city: "Barcelona",
      stateOrProvince: "Barcelona",
      postalCode: "08010",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.oxfamintermon.org/es",
    orgLicense: "259",
    orgRegistrar:
      "Registro de Fundaciones Privadas de la Generalitat de Cataluña",
    orgCategories: [
      "5da576bb27efb808bfc82509",
      "5da576bb27efb808bfc8250a",
      "5da576bb27efb808bfc8250b",
      "5da576bb27efb808bfc8250e"
    ],
    orgDonations: ["5da591206480c70da3e1904b"]
  },
  {
    _id: "5da576bb27efb808bfc82503",
    confirmationCode: 15,
    type: "organization",
    username: "org12",
    password: bcrypt.hashSync("org12", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "ACNUR/UNHCR",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org12_hy6waq.jpg",
    orgDescription:
      "El Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR, en inglés UNHCR, United Nations High Commissioner for Refugees) es el organismo de las Naciones Unidas encargado de proteger a los refugiados y desplazados por persecuciones o conflictos, y promover soluciones duraderas a su situación, mediante el reasentamiento voluntario en su país de origen o en el de acogida.",
    orgContactPerson: "Admin",
    orgTelephone: "+34915563649",
    orgEmail: "spama@unhcr.org",
    address: {
      line1: "Avenida General Perón 32",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28020",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.acnur.org/es-es/",
    orgCategories: [
      "5da576bb27efb808bfc82509",
      "5da576bb27efb808bfc8250b",
      "5da576bb27efb808bfc8250e",
      "5da576bb27efb808bfc82515",
      "5da576bb27efb808bfc82517"
    ]
  },
  {
    _id: "5da576bb27efb808bfc82504",
    confirmationCode: 16,
    type: "organization",
    username: "org13",
    password: bcrypt.hashSync("org13", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Confederación Española LGBT - colegas",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org13_e6yilu.png",
    orgDescription:
      "Colegas – Confederación Española LGBT es una asociación que trabaja por la igualdad, de lesbianas, gais, bisexuales y transexuales en España. Se define como un proyecto asociativo autónomo e independiente y su objetivo principal es la promoción y defensa de los derechos de lesbianas, gais, bisexuales y transexuales, contribuyendo al libre desarrollo de las personas en sintonía consu orientación sexual o identidad de género.",
    orgContactPerson: "Admin",
    orgTelephone: "+34914388724",
    orgEmail: "info@colegas.lgbt",
    address: {
      line1: "C/ Cabestreros 8",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28012",
      country: "España"
    },
    status: "active",
    orgUrl: "http://www.colegas.lgbt",
    orgCategories: ["5da576bb27efb808bfc82519"]
  },
  {
    _id: "5da576bb27efb808bfc82505",
    confirmationCode: 17,
    type: "organization",
    username: "org14",
    password: bcrypt.hashSync("org14", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Médicos Sin Fronteras",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org14_bznjym.jpg",
    orgDescription:
      "Somos una organización de acción médico-humanitaria: asistimos a personas amenazadas por conflictos armados, violencia, epidemias o enfermedades olvidadas, desastres naturales y exclusión de la atención médica. La acción humanitaria es un gesto solidario de sociedad civil a sociedad civil, de persona a persona, cuya finalidad es preservar la vida y aliviar el sufrimiento de otros seres humanos: esta es nuestra razón de ser.",
    orgContactPerson: "Admin",
    orgTelephone: "+34900494269",
    orgEmail: "oficina@barcelona.msf.org",
    address: {
      line1: "C/ Zamora 54",
      city: "Barcelona",
      stateOrProvince: "Barcelona",
      postalCode: "08005",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.msf.es/",
    orgCategories: ["5d9e2121e8afda188b34b1b2", "5d9e2121e8afda188b34b1c2"],
    orgDonations: ["5da591206480c70da3e1904d"],
    orgCampaigns: [
      "5da58e1256ccb50d06cb3446",
      "5da58e1256ccb50d06cb3447",
      "5da58e1256ccb50d06cb3448"
    ]
  },
  {
    _id: "5da576bb27efb808bfc82506",
    confirmationCode: 18,
    type: "organization",
    username: "org15",
    password: bcrypt.hashSync("org15", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Manos Unidas",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642340/causaImpacto/orgLogo/org15_v8lhpy.jpg",
    orgDescription:
      "Nuestra misión es la lucha contra el hambre, el subdesarrollo y la falta de instrucción y trabajar para erradicar las causas estructurales que las producen: la injusticia, el desigual reparto de los bienes y las oportunidades entre las personas y los pueblos, la ignorancia, los prejuicios, la insolidaridad, la indiferencia y la crisis de valores humanos y cristianos.",
    orgContactPerson: "Admin",
    orgTelephone: "+34900811888",
    orgEmail: "info@manosunidas.org",
    address: {
      line1: "C/ Barquillo 38",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28004",
      country: "España"
    },
    status: "active",
    orgUrl: "https://www.manosunidas.org/",
    orgCategories: [
      "5da576bb27efb808bfc82509",
      "5da576bb27efb808bfc82518"]
  },
  {
    _id: "5da576bb27efb808bfc82507",
    confirmationCode: 19,
    type: "organization",
    username: "org16",
    password: bcrypt.hashSync("org16", bcrypt.genSaltSync(bcryptSalt)),
    email: "causaimpacto.ironhack@gmail.com",
    orgName: "Proyecto Hombre Madrid",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1570642341/causaImpacto/orgLogo/org16_itxcxp.png",
    orgDescription:
      "Proyecto Hombre Madrid es una organización sin ánimo de lucro que trabaja para ayudar a las personas en dificultad o en desventaja social, contribuyendo a que puedan desarrollarse personalmente, recobren su autonomía y se integren en la sociedad, a través de programas y acciones terapéutico-educativas estructuradas según las necesidades de los diferentes perfiles: (1) Personas con problemas de adicción (con y sin sustancia) (2) Menores y jóvenes en dificultad y/o conflicto social. (3) Otros sectores de la población en situación de necesidad (inmigrantes, mujeres en dificultad social, reclusos, exreclusos, etc.)",
    orgContactPerson: "Admin",
    orgTelephone: "+34915420271",
    orgEmail: "info@proyectohombremadrid.org",
    address: {
      line1: "C/ Martín de los Heros 68",
      city: "Madrid",
      stateOrProvince: "Madrid",
      postalCode: "28008",
      country: "España"
    },
    status: "active",
    orgUrl: "http://proyectohombre.es/",
    orgCategories: [
      "5da576bb27efb808bfc82508",
      "5da576bb27efb808bfc8250f",
      "5da576bb27efb808bfc82513",
      "5da576bb27efb808bfc82515",
      "5da576bb27efb808bfc82516",
      "5da576bb27efb808bfc82517"
    ]
  }
];

Campaign.deleteMany()
  .then(() => {
    return Campaign.create(campaigns);
  })
  .then(campaignsCreated => {
    console.log(
      `${campaignsCreated.length} campaigns created with the following id:`
    );
    console.log(campaignsCreated.map(u => u._id));
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });

let campaigns = [
  {
    _id: "5da58e1256ccb50d06cb3446",
    organization: "5da576bb27efb808bfc82505",
    title: "Vacunación contra el sarampión",
    totalDonations: 230,
    description:
      "El sarampión es una enfermedad viral altamente contagiosa y una de las principales causas de muerte en niños pequeños. No existe un tratamiento específico: los pacientes son aislados y reciben tratamiento para la carencia de vitamina A, la deshidratación y otros síntomas y complicaciones. La mayoría de los afectados se recuperan, pero entre el 3 y el 20% no lo consiguen. Existe una vacuna segura y económica que reduce drásticamente el número de casos y muertes, pero sigue estando poco disponible en países con sistemas sanitarios débiles, por lo que siguen produciéndose brotes de gran magnitud. Cuando hay un brote, nuestros equipos vacunan a todos los niños de la región afectada para evitar una epidemia. En 2017, vacunamos a 2.095.000 personas en respuesta a brotes epidémicos. Con 6000€ dispondremos de las vacunas y el material médico necesario para inmunizar a 3.200 niños contra el sarampión y evitar que un brote se convierta en una epidemia. ",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1571128914/causaImpacto/campaigns/sarampion_campaign_yhnelt.jpg",
    fundraisingTarget: 6000,
    status: "active",
    deadline: new Date("2020-01-01"),
    suggestedDonation: 10,
    "singleDonations": ["5da591206480c70da3e1904f", "5da591206480c70da3e1904c"] // Rellenar
  },
  {
    _id: "5da58e1256ccb50d06cb3447",
    organization: "5da576bb27efb808bfc82505",
    title: "Artículos de primera necesidad para desplazados",
    description:
      "La prioridad de MSF es la atención médica, pero en emergencias nuestros equipos suelen distribuir artículos de primera necesidad esenciales para la salud y la supervivencia, como ropa de abrigo, mantas, material de refugio, productos de limpieza e higiene personal, utensilios de cocina y combustible. Muchos de estos artículos se distribuyen en kits. El de cocina, por ejemplo, contiene un hornillo, ollas, platos, vasos, cubiertos y un bidón para agua; el de higiene incluye jabón corporal, champú, cepillos de dientes, dentífrico y jabón detergente. Además, cuando las personas atendidas han quedado al raso, sin refugio, y los materiales necesarios no están disponibles localmente, MSF distribuye tiendas o lonas de plástico para que cada familia tenga un techo. En climas fríos, se reparten tiendas más gruesas o se buscan estructuras más permanentes. Con 150000€ podremos enviar de forma inmediata kits de primera necesidad para más de 4.100 personas: víctimas de desastres naturales, refugiados, etc. ",
      totalDonations: 0,
      image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1571131098/causaImpacto/campaigns/desplazados_campaign_ilg9xx.jpg",
    fundraisingTarget: 150000,
    status: "active",
    deadline: new Date("2020-01-01"),
    suggestedDonation: 10
    // "singleDonations": [""] // Rellenar
  },
  {
    _id: "5da58e1256ccb50d06cb3448",
    organization: "5da576bb27efb808bfc82505",
    title: "Desnutrición infantil",
    description:
      "La prioridad de MSF es la atención médica, pero en emergencias nuestros equipos suelen distribuir artículos de primera necesidad esenciales para la salud y la supervivencia, como ropa de abrigo, mantas, material de refugio, productos de limpieza e higiene personal, utensilios de cocina y combustible. Muchos de estos artículos se distribuyen en kits. El de cocina, por ejemplo, contiene un hornillo, ollas, platos, vasos, cubiertos y un bidón para agua; el de higiene incluye jabón corporal, champú, cepillos de dientes, dentífrico y jabón detergente. Además, cuando las personas atendidas han quedado al raso, sin refugio, y los materiales necesarios no están disponibles localmente, MSF distribuye tiendas o lonas de plástico para que cada familia tenga un techo. En climas fríos, se reparten tiendas más gruesas o se buscan estructuras más permanentes. Con 150000€ podremos enviar de forma inmediata kits de primera necesidad para más de 4.100 personas: víctimas de desastres naturales, refugiados, etc. ",
    image:
      "https://res.cloudinary.com/dbklyksys/image/upload/v1571131015/causaImpacto/campaigns/desnutricion_campaign_ylnnri.jpg",
    fundraisingTarget: 10000,
    status: "active",
    totalDonations: 0,
    deadline: new Date("2020-01-01"),
    suggestedDonation: 10
    // "singleDonations": [""] // Rellenar
  }
];

SingleDonation.deleteMany()
  .then(() => {
    return SingleDonation.create(singleDonations);
  })
  .then(singleDonationsCreated => {
    console.log(
      `${singleDonationsCreated.length} singleDonations created with the following id:`
    );
    console.log(singleDonationsCreated.map(u => u._id));
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });

singleDonations = [
  {
    _id: "5da591206480c70da3e1904b",
    user: "5da576bb27efb808bfc824f6",
    org: "5da576bb27efb808bfc82502",
    anonymousDonation: true,
    amountDonated: 50,
    comment: "Gracias por todo lo que hacéis.",
    contactConsent: true
  },
  {
    //Hecha
    _id: "5da591206480c70da3e1904c",
    user: "5da576bb27efb808bfc824f6",
    campaign: "5da58e1256ccb50d06cb3446",
    anonymousDonation: false,
    amountDonated: 200,
    comment: "¡Espero que el proyecto salga adelante!",
    contactConsent: false
  },
  {
    //Hecha
    _id: "5da591206480c70da3e1904d",
    user: "5da576bb27efb808bfc824f6",
    org: "5da576bb27efb808bfc82505",
    anonymousDonation: false,
    amountDonated: 30,
    comment: "Excelente organización.",
    contactConsent: true
  },
  {
    //Hecha
    _id: "5da591206480c70da3e1904e",
    user: "5da576bb27efb808bfc824f7",
    org: "5da576bb27efb808bfc82501",
    anonymousDonation: false,
    amountDonated: 10,
    comment: "UNICEF me parece una muy buena organización.",
    contactConsent: true
  },
  {
    //Hecha
    _id: "5da591206480c70da3e1904f",
    user: "5da576bb27efb808bfc824f7",
    campaign: "5da58e1256ccb50d06cb3446",
    anonymousDonation: false,
    amountDonated: 30,
    comment: "Espero que consigáis los fondos que necesitéis.",
    contactConsent: false
  },
  {
    //Hecha
    _id: "5da591206480c70da3e19050",
    user: "5da576bb27efb808bfc824f7",
    org: "5da576bb27efb808bfc824fa",
    anonymousDonation: true,
    amountDonated: 50,
    comment: "Una organización con una causa muy cercana a mí.",
    contactConsent: true
  }
];
