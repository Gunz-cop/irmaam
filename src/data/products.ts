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
};

export const products: Product[] = [
  {
    slug: "mezcla-diaria-nutricion",
    name: "Mezcla Diaria de Nutrición",
    category: "Nutrición",
    shortDescription:
      "Una opción sencilla para acompañar desayunos o meriendas con una rutina más organizada.",
    description:
      "Producto demo pensado para personas que buscan ordenar sus mañanas y tener una alternativa práctica dentro de una rutina diaria. La información final deberá reemplazarse por datos oficiales antes de publicar.",
    forWhom:
      "Puede servir para familias que desean planificar mejor sus opciones de uso diario sin complicarse.",
    usage:
      "En esta demo se presenta como una mezcla que se prepararía siguiendo la información oficial del producto real.",
    mariaReason:
      "María lo recomendaría cuando alguien quiere comenzar con algo simple, fácil de entender y adaptable al ritmo de la casa.",
    imageLabel: "Rutina diaria",
  },
  {
    slug: "bebida-practica-bienestar",
    name: "Bebida Práctica de Bienestar",
    category: "Nutrición",
    shortDescription:
      "Formato demo para quienes prefieren opciones listas para integrar a una agenda ocupada.",
    description:
      "Ejemplo de producto de nutrición cotidiana con enfoque práctico. No incluye precio ni promesas de resultados; sirve para mostrar cómo se vería una recomendación responsable.",
    forWhom:
      "Puede servir para adultos con días movidos que quieren conversar con María sobre opciones simples.",
    usage:
      "Se usaría según la etiqueta e información oficial del producto real elegido por la IBO.",
    mariaReason:
      "María lo sugeriría como punto de conversación para entender hábitos, horarios y preferencias.",
    imageLabel: "Uso diario",
  },
  {
    slug: "crema-suave-cuidado",
    name: "Crema Suave de Cuidado",
    category: "Belleza",
    shortDescription:
      "Producto demo para una rutina de cuidado personal tranquila, sin pasos complicados.",
    description:
      "Ejemplo visual de un producto de belleza para uso personal. El texto real debe basarse en información aprobada y clara, sin exageraciones.",
    forWhom:
      "Puede servir para personas que buscan una rutina sencilla y acompañamiento para escoger el orden de uso.",
    usage:
      "En la versión real se explicaría el modo de uso recomendado por la información oficial.",
    mariaReason:
      "María lo destacaría para quienes quieren empezar por un producto básico y fácil de incorporar.",
    imageLabel: "Cuidado suave",
  },
  {
    slug: "kit-basico-belleza",
    name: "Kit Básico de Belleza",
    category: "Belleza",
    shortDescription:
      "Selección demo para organizar pasos simples de cuidado personal durante la semana.",
    description:
      "Producto agrupado de muestra para representar una rutina inicial de belleza. La selección real dependerá de disponibilidad, preferencia y guía oficial.",
    forWhom:
      "Puede servir para quienes desean comparar opciones antes de decidir qué comprar.",
    usage:
      "María explicaría cada paso con base en los productos reales y sus instrucciones oficiales.",
    mariaReason:
      "María lo recomendaría como una forma ordenada de empezar sin comprar cosas que no se necesitan.",
    imageLabel: "Rutina simple",
  },
  {
    slug: "limpiador-hogar-diario",
    name: "Limpiador de Hogar Diario",
    category: "Hogar",
    shortDescription:
      "Opción práctica para mostrar recomendaciones de limpieza cotidiana y organización.",
    description:
      "Producto demo para representar una solución de limpieza del hogar. El contenido final deberá usar nombres, instrucciones y avisos oficiales.",
    forWhom:
      "Puede servir para familias que quieren simplificar la limpieza semanal con productos de uso diario.",
    usage:
      "Se utilizaría siguiendo las indicaciones del producto real y las superficies recomendadas.",
    mariaReason:
      "María lo incluiría para quienes preguntan por opciones prácticas, rendidoras y fáciles de explicar.",
    imageLabel: "Casa práctica",
  },
  {
    slug: "spray-multiuso-cocina",
    name: "Spray Multiuso de Cocina",
    category: "Hogar",
    shortDescription:
      "Demo de producto para áreas de uso frecuente, con enfoque en hábitos simples de limpieza.",
    description:
      "Ejemplo de tarjeta para producto del hogar sin precio ni promesas. La versión publicada debe reemplazar este texto por contenido aprobado.",
    forWhom:
      "Puede servir para hogares que desean mantener una rutina de limpieza más ordenada.",
    usage:
      "En una ficha real se indicarían superficies, frecuencia y precauciones según la fuente oficial.",
    mariaReason:
      "María lo sugeriría dentro de conversaciones sobre cocina, familia y limpieza cotidiana.",
    imageLabel: "Cocina limpia",
  },
];

export const featuredProducts = products.slice(0, 3);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
