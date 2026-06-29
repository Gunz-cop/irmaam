export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "elegir-productos-rutina-bienestar",
    title: "Cómo elegir productos para empezar una rutina de bienestar",
    description:
      "Una guía tranquila para conversar, comparar opciones y empezar con pasos realistas.",
    category: "Bienestar",
    body: [
      "Empezar una rutina nueva no tiene que sentirse como una lista enorme de cosas por comprar. Para muchas familias, lo más útil es comenzar con una conversación: qué horarios tienen, qué hábitos ya existen en casa y qué tipo de productos prefieren usar de forma constante.",
      "Una recomendación responsable comienza escuchando. Antes de sugerir productos, María podría preguntar si la persona busca algo para la mañana, para llevar al trabajo, para organizar la compra mensual o para entender mejor una categoría. Esa información ayuda a evitar compras impulsivas y permite elegir con más calma.",
      "También conviene revisar la información oficial de cada producto antes de decidir. En una versión real del sitio, cada ficha debería enlazar al MyShop autorizado o a la fuente correspondiente para que la persona pueda leer ingredientes, instrucciones, tamaños y disponibilidad. La orientación personalizada no reemplaza esa revisión; la acompaña.",
      "Una buena forma de empezar es escoger una sola área: nutrición cotidiana, cuidado personal o productos para el hogar. Después se puede ampliar la rutina según la experiencia, el presupuesto y las preferencias de la familia. El objetivo es que la selección se sienta práctica, no abrumadora.",
      "Este sitio demo muestra cómo María podría organizar recomendaciones en español para que sus clientes se sientan acompañados desde el primer mensaje hasta la compra final en el sitio oficial.",
    ],
  },
  {
    slug: "ideas-organizar-limpieza-hogar",
    title: "Ideas simples para organizar la limpieza del hogar",
    description:
      "Consejos prácticos para ordenar productos por espacio y frecuencia de uso.",
    category: "Hogar",
    body: [
      "La limpieza del hogar suele volverse más fácil cuando los productos están organizados por espacios y no por impulso de compra. Cocina, baño, superficies y lavandería pueden tener necesidades distintas, así que conviene pensar primero en la rutina real de la casa.",
      "Una familia con niños, horarios largos de trabajo o varias personas compartiendo espacios puede necesitar productos prácticos y fáciles de ubicar. María podría ayudar a separar lo esencial de lo ocasional, explicar qué información revisar y sugerir una lista inicial para conversar antes de comprar.",
      "Otra idea sencilla es identificar la frecuencia de uso. Hay productos que se usan casi todos los días y otros que solo entran en la rutina semanal o mensual. Al organizar así la lista, es más fácil saber qué reponer y qué no hace falta comprar todavía.",
      "En una versión real, cada recomendación debería incluir instrucciones oficiales, advertencias del producto, superficies indicadas y enlace autorizado. Esta demo no reemplaza esos datos; solo muestra cómo se vería una experiencia más clara y cercana para el cliente.",
      "Lo importante es que la persona sienta que puede preguntar sin presión. Un sitio personal bien hecho puede convertirse en una guía tranquila para decidir qué productos revisar primero.",
    ],
  },
  {
    slug: "comprar-con-acompanamiento-personalizado",
    title: "Cómo comprar con acompañamiento personalizado",
    description:
      "Qué esperar cuando una IBO independiente guía una compra mediante enlace autorizado.",
    category: "Compra acompañada",
    body: [
      "Comprar con acompañamiento personalizado significa que alguien te ayuda a entender opciones antes de que tomes una decisión. En este demo, María aparece como una IBO independiente que orienta en español a familias hispanas en Estados Unidos, sin procesar pagos dentro del sitio personal.",
      "El flujo sería sencillo: primero exploras recomendaciones, después haces preguntas por WhatsApp o por un formulario, y finalmente revisas la información oficial en el MyShop autorizado. La compra real se realizaría fuera de este sitio, en Amway.com, mediante el enlace correspondiente.",
      "Ese modelo ayuda a mantener claridad. El sitio personal sirve como una guía humana, con categorías, paquetes y explicaciones sencillas. El sitio oficial mantiene la información comercial final, disponibilidad y proceso de compra.",
      "Una buena experiencia debe dejar claro qué es orientación y qué es compra. También debe evitar promesas exageradas, presiones o mensajes confusos. La persona debería poder volver, comparar, preguntar y decidir con calma.",
      "Este prototipo existe justamente para visualizar esa idea. No vende productos reales, no cobra y no pretende representar a Amway. Es una forma de conversar sobre cómo podría verse el sitio personal de María antes de construir una versión productiva.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
