export type ProductCategory = "Nutrición" | "Belleza" | "Hogar";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  forWhom: string;
  usage: string;
  mariaReason: string;
  imageLabel: string;
  articleNumber?: string;
  iboPrice?: string;
  retailPrice?: string;
  pvBv?: string;
  rating?: string;
  reviews?: string;
  availability?: string;
};

export const products: Product[] = [
  {
    slug: "nutrilite-paquete-hombres",
    name: "Nutrilite Paquete para hombres",
    category: "Nutrición",
    shortDescription:
      "Selección Nutrilite enfocada en una rutina diaria práctica para hombres.",
    description:
      "Paquete de referencia tomado del catálogo Amway para conversar sobre una rutina inicial de nutrición cotidiana. Antes de comprar, conviene revisar la ficha oficial, disponibilidad y recomendaciones de uso.",
    forWhom:
      "Para hombres que quieren empezar con una selección organizada y prefieren orientación antes de elegir productos por separado.",
    usage:
      "Se debe usar siguiendo las indicaciones oficiales de cada producto incluido en el paquete.",
    mariaReason:
      "María lo puede usar como punto de partida para hablar de hábitos, horarios y presupuesto sin complicar la primera compra.",
    imageLabel: "Hombres",
    articleNumber: "123365",
    iboPrice: "$66.60",
    retailPrice: "$74.00",
    pvBv: "19+2 / 66.60",
    rating: "5",
    reviews: "395",
    availability: "En existencia",
  },
  {
    slug: "nutrilite-paquete-mujeres",
    name: "Nutrilite Paquete para mujeres",
    category: "Nutrición",
    shortDescription:
      "Paquete Nutrilite para organizar una rutina diaria sencilla para mujeres.",
    description:
      "Selección de referencia para presentar opciones Nutrilite de forma clara y acompañada. La información final de ingredientes, uso y disponibilidad debe confirmarse en Amway.",
    forWhom:
      "Para mujeres que desean comparar una selección inicial antes de comprar productos individuales.",
    usage:
      "Cada producto del paquete debe revisarse y utilizarse según la información oficial del fabricante.",
    mariaReason:
      "María lo recomendaría cuando alguien quiere una opción ya agrupada para empezar con más claridad.",
    imageLabel: "Mujeres",
    articleNumber: "123372",
    iboPrice: "$53.10",
    retailPrice: "$59.00",
    pvBv: "15.48 / 53.10",
    rating: "5",
    reviews: "522",
    availability: "En existencia",
  },
  {
    slug: "artistry-skin-nutrition-sistema-renovador",
    name: "Paquete sistema renovador Artistry Skin Nutrition",
    category: "Belleza",
    shortDescription:
      "Sistema Artistry Skin Nutrition para una rutina de cuidado facial por pasos.",
    description:
      "Paquete de cuidado personal Artistry Skin Nutrition para presentar una rutina facial organizada. La recomendación debe acompañarse con la información oficial de uso y compatibilidad con cada tipo de piel.",
    forWhom:
      "Para personas interesadas en una rutina de belleza más completa y guiada.",
    usage:
      "Se usa siguiendo el orden y las instrucciones oficiales de los productos incluidos.",
    mariaReason:
      "María lo puede presentar cuando alguien busca una opción de belleza estructurada en vez de elegir productos sueltos.",
    imageLabel: "Artistry",
    articleNumber: "266694",
    iboPrice: "$129.60",
    retailPrice: "$144.00",
    pvBv: "37.77 / 129.60",
    reviews: "0",
    availability: "En existencia",
  },
  {
    slug: "salud-vision-nutrilite",
    name: "Salud de la visión Nutrilite",
    category: "Nutrición",
    shortDescription:
      "Producto Nutrilite para conversar sobre apoyo nutricional diario relacionado con la visión.",
    description:
      "Producto de referencia del catálogo Nutrilite. Esta ficha sirve para orientar la conversación, no para sustituir la etiqueta, indicaciones oficiales o consejo profesional.",
    forWhom:
      "Para personas que preguntan por opciones Nutrilite específicas y desean revisar detalles antes de comprar.",
    usage:
      "Debe utilizarse según la etiqueta oficial y las recomendaciones disponibles en Amway.",
    mariaReason:
      "María lo incluiría cuando la persona ya tiene una necesidad concreta y quiere comparar opciones con calma.",
    imageLabel: "Visión",
    articleNumber: "124708",
    iboPrice: "$31.50",
    retailPrice: "$35.00",
    pvBv: "9.18 / 31.50",
    rating: "5",
    reviews: "40",
    availability: "En existencia",
  },
  {
    slug: "salud-cabello-piel-unas-nutrilite",
    name: "Salud del cabello, piel y uñas Nutrilite",
    category: "Nutrición",
    shortDescription:
      "Opción Nutrilite para una rutina de cuidado personal desde la nutrición.",
    description:
      "Producto Nutrilite de referencia para quienes desean conversar sobre cabello, piel y uñas dentro de una rutina diaria. La información aprobada debe confirmarse en la ficha oficial.",
    forWhom:
      "Para personas que buscan una opción enfocada en cuidado personal y quieren revisar ingredientes, uso y disponibilidad.",
    usage:
      "Debe usarse de acuerdo con las indicaciones oficiales del producto.",
    mariaReason:
      "María lo puede sugerir como tema de consulta cuando alguien pregunta por belleza y bienestar en una misma conversación.",
    imageLabel: "Cabello y piel",
    articleNumber: "A7553",
    iboPrice: "$23.40",
    retailPrice: "$26.00",
    pvBv: "6.82 / 23.40",
    rating: "4.8",
    reviews: "92",
    availability: "En existencia",
  },
  {
    slug: "probiotico-balance-within-nutrilite",
    name: "Probiótico Balance Within de Nutrilite",
    category: "Nutrición",
    shortDescription:
      "Probiótico Nutrilite para revisar dentro de una rutina nutricional acompañada.",
    description:
      "Producto de referencia para conversar sobre opciones Nutrilite de uso diario. La compra debe hacerse revisando la ficha oficial, advertencias y disponibilidad vigente.",
    forWhom:
      "Para personas interesadas en ordenar su rutina nutricional y hacer preguntas antes de decidir.",
    usage:
      "Usar únicamente según las indicaciones oficiales del producto.",
    mariaReason:
      "María lo puede recomendar como una opción para evaluar cuando la persona busca productos Nutrilite específicos.",
    imageLabel: "Probiótico",
    articleNumber: "120571",
    iboPrice: "$38.70",
    retailPrice: "$43.00",
    pvBv: "11.28 / 38.70",
    rating: "4.9",
    reviews: "282",
    availability: "En existencia",
  },
  {
    slug: "tubitos-2go-nutrilite-paquete-surtido",
    name: "Tubitos 2GO de Nutrilite - Paquete surtido",
    category: "Nutrición",
    shortDescription:
      "Paquete surtido en formato práctico para llevar y preparar durante el día.",
    description:
      "Producto Nutrilite de formato conveniente para personas que prefieren opciones fáciles de integrar a su agenda. Revisar disponibilidad antes de recomendarlo.",
    forWhom:
      "Para personas con días movidos que quieren una opción práctica y fácil de transportar.",
    usage:
      "Preparar y consumir de acuerdo con la etiqueta oficial del producto.",
    mariaReason:
      "María lo puede mencionar cuando alguien busca algo práctico para llevar, siempre verificando inventario primero.",
    imageLabel: "2GO",
    articleNumber: "110922",
    iboPrice: "$21.60",
    retailPrice: "$24.00",
    pvBv: "6.29 / 21.60",
    rating: "4.9",
    reviews: "107",
    availability: "Pedido en espera. Disponibilidad esperada 07/06/2026",
  },
  {
    slug: "concentrado-frutas-verduras-nutrilite",
    name: "Concentrado de frutas y verduras Nutrilite",
    category: "Nutrición",
    shortDescription:
      "Producto Nutrilite para complementar una rutina diaria con enfoque en frutas y verduras.",
    description:
      "Opción de referencia del catálogo Nutrilite para quienes desean conversar sobre complementos de uso diario. La información nutricional final debe tomarse de la ficha oficial.",
    forWhom:
      "Para personas que desean revisar alternativas Nutrilite relacionadas con hábitos diarios de alimentación.",
    usage:
      "Debe usarse siguiendo la etiqueta e información oficial del producto.",
    mariaReason:
      "María lo incluiría en una conversación cuando alguien quiere una rutina sencilla y fácil de explicar.",
    imageLabel: "Frutas y verduras",
    articleNumber: "100648",
    iboPrice: "$41.40",
    retailPrice: "$46.00",
    pvBv: "12.07 / 41.40",
    rating: "5",
    reviews: "86",
    availability: "En existencia",
  },
  {
    slug: "vitamina-c-accion-prolongada-nutrilite",
    name: "Vitamina C de acción prolongada Nutrilite",
    category: "Nutrición",
    shortDescription:
      "Vitamina C Nutrilite para revisar como parte de una rutina diaria.",
    description:
      "Producto de referencia para orientar preguntas sobre vitamina C dentro del catálogo Nutrilite. Confirmar siempre dosis, advertencias y detalles oficiales antes de comprar.",
    forWhom:
      "Para personas que ya buscan vitamina C y quieren comparar una opción de Amway con acompañamiento.",
    usage:
      "Usar de acuerdo con la etiqueta oficial y las instrucciones publicadas por Amway.",
    mariaReason:
      "María lo puede presentar cuando alguien pide una opción específica y quiere revisar precio, artículo y disponibilidad.",
    imageLabel: "Vitamina C",
    articleNumber: "109747",
    iboPrice: "$48.60",
    retailPrice: "$54.00",
    pvBv: "14.17 / 48.60",
    rating: "5",
    reviews: "1013",
    availability: "En existencia",
  },
  {
    slug: "comida-completa-polvo-nutrilite-organics-vainilla",
    name: "Comida completa en polvo Nutrilite Organics - Vainilla",
    category: "Nutrición",
    shortDescription:
      "Comida completa en polvo sabor vainilla para una opción práctica dentro de la rutina.",
    description:
      "Producto Nutrilite Organics de referencia para quienes buscan una opción en polvo. La recomendación debe confirmar ingredientes, preparación y uso oficial antes de comprar.",
    forWhom:
      "Para personas que quieren una opción práctica de preparación y desean revisar si encaja con su rutina.",
    usage:
      "Preparar según las instrucciones oficiales del empaque y la ficha del producto.",
    mariaReason:
      "María lo puede recomendar como una alternativa práctica cuando la persona busca algo fácil de preparar.",
    imageLabel: "Vainilla",
    articleNumber: "318671",
    iboPrice: "$63.00",
    retailPrice: "$70.00",
    pvBv: "18.36 / 63.00",
    rating: "5",
    reviews: "25",
    availability: "En existencia",
  },
];

export const featuredProducts = products.slice(0, 3);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
