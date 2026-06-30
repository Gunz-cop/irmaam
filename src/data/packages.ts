export type Package = {
  slug: string;
  name: string;
  description: string;
  forWhom: string;
  includes: string[];
  practicalBenefit: string;
  routine: string[];
  articleNumber?: string;
  iboPrice?: string;
  retailPrice?: string;
  pvBv?: string;
  rating?: string;
  reviews?: string;
  availability?: string;
};

export const packages: Package[] = [
  {
    slug: "nutrilite-paquete-hombres",
    name: "Nutrilite Paquete para hombres",
    description:
      "Selección Nutrilite para iniciar una rutina diaria organizada con productos pensados para hombres.",
    forWhom:
      "Para hombres que prefieren empezar con un paquete ya agrupado y recibir orientación antes de comprar.",
    includes: [
      "Paquete Nutrilite para hombres",
      "Referencia de uso desde la ficha oficial",
      "Orientación de María para revisar hábitos y presupuesto",
    ],
    practicalBenefit:
      "Permite conversar sobre una selección inicial sin tener que elegir cada producto por separado.",
    routine: [
      "Revisar el paquete y confirmar disponibilidad en Amway.",
      "Leer instrucciones oficiales de cada producto incluido.",
      "Ajustar la compra según rutina, presupuesto y preferencias.",
    ],
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
    description:
      "Selección Nutrilite para presentar una rutina diaria sencilla y acompañada para mujeres.",
    forWhom:
      "Para mujeres que desean comparar una opción agrupada antes de escoger productos individuales.",
    includes: [
      "Paquete Nutrilite para mujeres",
      "Referencia de uso desde la ficha oficial",
      "Acompañamiento para resolver dudas antes de comprar",
    ],
    practicalBenefit:
      "Ayuda a iniciar una conversación clara sobre necesidades, horarios y preferencia de productos.",
    routine: [
      "Confirmar que el paquete esté disponible en el sitio oficial.",
      "Revisar detalles de uso e ingredientes publicados por Amway.",
      "Decidir si el paquete completo tiene sentido o si conviene elegir productos sueltos.",
    ],
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
    description:
      "Sistema Artistry Skin Nutrition para organizar una rutina facial renovadora por pasos.",
    forWhom:
      "Para personas interesadas en una rutina de belleza más completa, guiada y fácil de seguir.",
    includes: [
      "Productos del sistema renovador Artistry Skin Nutrition",
      "Referencia de orden de uso según información oficial",
      "Consulta con María para revisar tipo de rutina y preferencias",
    ],
    practicalBenefit:
      "Evita escoger productos de belleza al azar y permite revisar una rutina completa antes de comprar.",
    routine: [
      "Revisar el sistema completo y confirmar disponibilidad.",
      "Leer el modo de uso oficial de cada paso.",
      "Ajustar la rutina según preferencias, sensibilidad y presupuesto.",
    ],
    articleNumber: "266694",
    iboPrice: "$129.60",
    retailPrice: "$144.00",
    pvBv: "37.77 / 129.60",
    reviews: "0",
    availability: "En existencia",
  },
];

export const featuredPackage = packages[0];

export function getPackage(slug: string) {
  return packages.find((item) => item.slug === slug);
}
