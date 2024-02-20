const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Argentina?",
      opciones: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
      respuesta: "Buenos Aires",
      dificultad: "fácil",
    },
    {
        pregunta: "¿En qué continente se encuentra Argentina?",
        opciones: ["América del Sur", "Europa", "África", "Oceanía"],
        respuesta: "América del Sur",
        dificultad: "fácil",
      },
      {
        pregunta: "¿Cuál es el baile tradicional de Argentina?",
        opciones: ["Samba", "Tango", "Flamenco", "Ballet"],
        respuesta: "Tango",
        dificultad: "fácil",
      },
    {
      pregunta: "¿Cuál es el nombre completo del país?",
      opciones: ["República Argentina", "Estados Unidos de Argentina", "Federación Argentina", "República Federal de Argentina"],
      respuesta: "República Argentina",
      dificultad: "normal",
    },
    {
        pregunta: "¿Cuál es el río más largo de Argentina?",
        opciones: ["Río Paraná", "Río Uruguay", "Río de la Plata", "Río Negro"],
        respuesta: "Río Paraná",
        dificultad: "normal",
      },
      
      {
        pregunta: "¿Cuál es la montaña más alta de Argentina?",
        opciones: ["Aconcagua", "Fitz Roy", "Cerro Torre", "Monte Pissis"],
        respuesta: "Aconcagua",
        dificultad: "difícil",
      },
      {
        pregunta: "¿Qué significan los colores de la bandera argentina?",
        opciones: ["Paz y unidad", "Libertad y justicia", "Sangre y valentía", "Sol y esperanza"],
        respuesta: "Sol y esperanza",
        dificultad: "normal",
      },
      {
        pregunta: "¿En qué año se declaró la independencia de Argentina?",
        opciones: ["1808", "1816", "1821", "1830"],
        respuesta: "1816",
        dificultad: "difícil",
      },
      {
        pregunta: "¿Qué deporte es muy popular en Argentina?",
        opciones: ["Fútbol", "Rugby", "Cricket", "Tenis"],
        respuesta: "Fútbol",
        dificultad: "fácil",
      },
      {
        pregunta: "¿Quién fue Eva Perón y por qué es famosa?",
        opciones: ["Actriz, primera dama conocida por su obra social", "Cantante, activista por los derechos humanos", "Escritora, líder del movimiento feminista", "Política, presidenta de Argentina"],
        respuesta: "Actriz, primera dama conocida por su obra social",
        dificultad: "difícil",
      },
      {
        pregunta: "¿Quién fue el famoso líder político argentino conocido como 'El Libertador'?",
        opciones: ["Simón Bolívar", "José de San Martín", "Eva Perón", "Juan Manuel de Rosas"],
        respuesta: "José de San Martín",
        dificultad: "fácil",
      },
      {
        pregunta: "¿Cuál es el plato nacional de Argentina?",
        opciones: ["Milanesa", "Empanada", "Asado", "Locro"],
        respuesta: "Locro",
        dificultad: "normal",
      },
      {
        pregunta: "¿Cuál es el punto más austral de Argentina?",
        opciones: ["Ushuaia", "Puerto Williams", "Cabo de Hornos", "Punta Dungeness"],
        respuesta: "Cabo de Hornos",
        dificultad: "difícil",
      },
      {
        pregunta: "¿Cuál es la moneda oficial de Argentina?",
        opciones: ["Peso argentino", "Real", "Dólar", "Euro"],
        respuesta: "Peso argentino",
        dificultad: "normal",
      },
      {
        pregunta: "¿En qué ciudad se encuentra el famoso teatro Colón?",
        opciones: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
        respuesta: "Buenos Aires",
        dificultad: "difícil",
      },
      {
        pregunta: "¿Cuál es el animal nacional de Argentina?",
        opciones: ["Yaguareté", "Cóndor", "Hornero", "Guanaco"],
        respuesta: "Hornero",
        dificultad: "fácil",
      },
        {
          pregunta: "¿Cuál es el nombre del glaciar más famoso de Argentina?",
          opciones: ["Glaciar Perito Moreno", "Glaciar Upsala", "Glaciar Spegazzini", "Glaciar Viedma"],
          respuesta: "Glaciar Perito Moreno",
          dificultad: "difícil",
        },
      {
        pregunta: "¿Cuál es el idioma oficial de Argentina?",
        opciones: ["Español", "Inglés", "Portugués", "Quechua"],
        respuesta: "Español",
        dificultad: "fácil",
      },
      {
          pregunta: "¿Cuál es el mayor lago de Argentina?",
          opciones: ["Laguna Mar Chiquita", "Lago Buenos Aires", "Lago Viedma", "Lago Argentino"],
          respuesta: "Lago Argentino",
          dificultad: "normal",
        },
        {
          pregunta: "¿Quién fue el primer presidente de Argentina?",
          opciones: ["Juan Martín de Pueyrredón", "José de San Martín", "Bernardino Rivadavia", "Manuel Belgrano"],
          respuesta: "Bernardino Rivadavia",
          dificultad: "difícil",
        },
      {
        pregunta: "¿Cuál es la flor nacional de Argentina?",
        opciones: ["Ceibo", "Jacarandá", "Rosa", "Lirio"],
        respuesta: "Ceibo",
        dificultad: "fácil",
      },
      {
          pregunta: "¿Cuál es el principal puerto marítimo de Argentina?",
          opciones: ["Bahía Blanca", "Rosario", "Buenos Aires", "Ushuaia"],
          respuesta: "Buenos Aires",
          dificultad: "normal",
        },
        {
          pregunta: "¿Cuál es la obra literaria más importante de Jorge Luis Borges?",
          opciones: ["El Eternauta", "El Aleph", "El Hacedor", "Ficciones"],
          respuesta: "Ficciones",
          dificultad: "difícil",
        },
      {
        pregunta: "¿Cuál es el nombre del himno nacional argentino?",
        opciones: ["Aurora", "Himno Nacional Argentino", "La Marcha de San Lorenzo", "Canción Patria"],
        respuesta: "Himno Nacional Argentino",
        dificultad: "fácil",
      },
      {
          pregunta: "¿En qué año se inauguró el Obelisco de Buenos Aires?",
          opciones: ["1936", "1946", "1956", "1966"],
          respuesta: "1936",
          dificultad: "normal",
        },
        {
          pregunta: "¿Cuál es la mayor reserva natural de Argentina?",
          opciones: ["Parque Nacional Iguazú", "Parque Nacional Tierra del Fuego", "Parque Nacional Los Glaciares", "Parque Nacional Lanín"],
          respuesta: "Parque Nacional Los Glaciares",
          dificultad: "difícil",
        },
      {
          pregunta: "¿Cuál es la universidad más antigua de Argentina?",
          opciones: ["Universidad de Buenos Aires", "Universidad Nacional de Córdoba", "Universidad Nacional de La Plata", "Universidad Nacional del Litoral"],
          respuesta: "Universidad Nacional de Córdoba",
          dificultad: "difícil",
        },
        {
          pregunta: "¿En qué año Argentina ganó la Copa Mundial de Fútbol?",
          opciones: ["1978, 1986 Y 2023", "2002, 2014 Y 2023", "1986, 1990 Y 2023"],
          respuesta: "1978, 1986 Y 2023",
          dificultad: "facil",
        },
        {
          pregunta: "¿Cuál es la institución científica más importante de Argentina?",
          opciones: ["CONAE", "INTA", "CNEA", "CONICET"],
          respuesta: "CONICET",
          dificultad: "facil",
        },
        {
          pregunta: "¿Quién es el científico argentino conocido por su trabajo en el campo de la biología molecular y la medicina?",
          opciones: ["César Milstein", "Luis Federico Leloir", "Bernardo Houssay", "René Favaloro"],
          respuesta: "Luis Federico Leloir",
          dificultad: "difícil",
        },
        {
          pregunta: "¿Cuál es la película argentina más premiada internacionalmente?",
          opciones: ["El secreto de sus ojos", "La historia oficial", "El hijo de la novia", "Relatos salvajes"],
          respuesta: "El secreto de sus ojos",
          dificultad: "normal",
        },
        {
          pregunta: "¿Cuál es el director de cine argentino ganador del premio Óscar por mejor película extranjera?",
          opciones: ["Gustavo Santaolalla", "Lucrecia Martel", "Pablo Trapero", "Juan José Campanella"],
          respuesta: "Juan José Campanella",
          dificultad: "difícil",
        },
        {
          pregunta: "¿Cuál es el nombre del monumento más famoso de Buenos Aires?",
          opciones: ["Palacio Barolo", "Puente de la Mujer", "Floralis Genérica", "Obelisco"],
          respuesta: "Obelisco",
          dificultad: "fácil",
      },
      {
        pregunta: "¿En qué provincia argentina se encuentra la Quebrada de Humahuaca, declarada Patrimonio de la Humanidad por la UNESCO?",
        opciones: ["Jujuy", "Salta", "Tucumán", "Catamarca"],
        respuesta: "Jujuy",
        dificultad: "normal",
    },
    {
      pregunta: "¿Qué ciudad argentina es conocida como 'La Ciudad de la Furia'?",
      opciones: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"],
      respuesta: "Buenos Aires",
      dificultad: "difícil",
  },
  {
    pregunta: "¿Cuál es la bebida nacional de Argentina?",
    opciones: ["Fernet con Coca", "Vino Malbec", "Mate", "Quilmes"],
    respuesta: "Mate",
    dificultad: "fácil",
},
{
  pregunta: "¿Qué animal es emblemático de la región patagónica argentina?",
  opciones: ["Llama", "Puma", "Guanaco", "Zorro"],
  respuesta: "Guanaco",
  dificultad: "normal",
},
{
  pregunta: "¿Quién es el autor del Martín Fierro, la obra más importante de la literatura gauchesca argentina?",
  opciones: ["José Hernández", "Estanislao del Campo", "Bartolomé Hidalgo", "Juan María Gutierrez"],
  respuesta: "José Hernández",
  dificultad: "difícil",
},
{
  pregunta: "¿Qué danza folclórica argentina se caracteriza por ser en pareja y con pañuelos?",
  opciones: ["Zamba", "Gato", "Cueca", "Chacarera"],
  respuesta: "Chacarera",
  dificultad: "normal",
},
{
  pregunta: "¿En qué provincia argentina se encuentra la famosa Cueva de las Manos, con pinturas rupestres de hasta 9,000 años de antigüedad?",
  opciones: ["Santa Cruz", "Chubut", "Neuquén", "Río Negro"],
  respuesta: "Santa Cruz",
  dificultad: "difícil",
},
{
  pregunta: "¿Qué escritor argentino ganó el Premio Nobel de Literatura en 1947?",
  opciones: ["Julio Cortázar", "Gabriela Mistral", "Adolfo Bioy Casares", "Juan Ramón Jiménez"],
  respuesta: "Juan Ramón Jiménez",
  dificultad: "difícil",
},
{
  pregunta: "¿Cuál es el nombre del presidente argentino que asumió el cargo en 2019?",
  opciones: ["Mauricio Macri", "Alberto Fernández", "Néstor Kirchner", "Cristina Fernández de Kirchner"],
  respuesta: "Alberto Fernández",
  dificultad: "facil",
},
{
  pregunta: "¿En qué año se fundó la ciudad de Buenos Aires?",
  opciones: ["1500", "1536", "1580", "1610"],
  respuesta: "1536",
  dificultad: "difícil",
},
{
  pregunta: "¿Cuál es el nombre del científico argentino conocido por su trabajo en el campo de la medicina y la microbiología?",
  opciones: ["Bernardo Houssay", "Luis Federico Leloir", "César Milstein", "Carlos Saavedra Lamas"],
  respuesta: "Bernardo Houssay",
  dificultad: "difícil",
},
{
  pregunta: "¿Qué película argentina ganó el Premio Goya a la Mejor Película Iberoamericana en 2009?",
  opciones: ["Relatos salvajes", "La historia oficial", "El hijo de la novia", "El secreto de sus ojos"],
  respuesta: "El secreto de sus ojos",
  dificultad: "normal",
},


  ];