export type Package = {
  slug: string;
  name: string;
  description: string;
  forWhom: string;
  includes: string[];
  practicalBenefit: string;
  routine: string[];
};

export const packages: Package[] = [
  {
    slug: "bienestar-diario",
    name: "Paquete Bienestar Diario",
    description:
      "Una combinación demo para personas que quieren empezar con una rutina sencilla de productos de uso diario.",
    forWhom:
      "Para quienes desean organizar hábitos básicos y prefieren recibir orientación antes de elegir.",
    includes: [
      "Producto demo de nutrición cotidiana",
      "Bebida o mezcla práctica",
      "Guía breve de organización semanal",
    ],
    practicalBenefit:
      "Ayuda a tener una conversación clara sobre qué productos podrían encajar en el día a día.",
    routine: [
      "Elegir un momento fijo para revisar la rutina.",
      "Consultar la información oficial de cada producto real.",
      "Ajustar la selección según gustos, presupuesto y preferencias.",
    ],
  },
  {
    slug: "hogar-practico",
    name: "Paquete Hogar Práctico",
    description:
      "Selección demo para limpieza y organización de zonas de uso frecuente en casa.",
    forWhom:
      "Para familias que desean simplificar compras de hogar y entender qué usar en cada espacio.",
    includes: [
      "Limpiador demo para uso cotidiano",
      "Producto demo para cocina",
      "Notas de rutina semanal",
    ],
    practicalBenefit:
      "Facilita ordenar productos por espacio: cocina, baño, superficies y reposición.",
    routine: [
      "Identificar los espacios donde más se necesita apoyo.",
      "Separar productos por frecuencia de uso.",
      "Revisar instrucciones oficiales antes de comprar.",
    ],
  },
  {
    slug: "belleza-esencial",
    name: "Paquete Belleza Esencial",
    description:
      "Paquete demo para visualizar una rutina básica de cuidado personal con pocos pasos.",
    forWhom:
      "Para personas que quieren empezar con una selección clara y acompañada.",
    includes: [
      "Producto demo de cuidado personal",
      "Producto demo complementario",
      "Recomendación de orden de uso",
    ],
    practicalBenefit:
      "Reduce la confusión inicial al comparar opciones y ayuda a elegir con calma.",
    routine: [
      "Empezar con una rutina breve.",
      "Observar preferencias de textura y horario.",
      "Comprar solo lo que tenga sentido para la persona.",
    ],
  },
];

export const featuredPackage = packages[0];

export function getPackage(slug: string) {
  return packages.find((item) => item.slug === slug);
}
