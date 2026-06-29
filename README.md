# Bienestar en Casa con María

Prototipo navegable en Astro para mostrar cómo podría verse un sitio personal de recomendaciones de productos para una IBO hispana de Amway en Estados Unidos.

## Qué es

Es una demo visual, estática y editable. Incluye páginas de inicio, sobre mí, productos, paquetes, blog, contacto visual y una pantalla simulada de salida hacia MyShop.

## Qué NO es

No es una tienda real, no procesa pagos, no tiene carrito, no usa autenticación, no tiene base de datos y no se hace pasar por Amway. El contenido comercial es simulado.

## Correr localmente

```bash
npm install
npm run dev
```

El servidor local normalmente abre en `http://localhost:4321`.

## Hacer build

```bash
npm run build
```

El sitio estático se genera en `dist`.

## Publicar en Cloudflare Pages

1. Sube el repositorio a GitHub o conecta la carpeta desde tu flujo preferido.
2. En Cloudflare Pages, crea un proyecto nuevo.
3. Usa estos comandos:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. No se necesitan Workers, base de datos ni variables de entorno para esta demo.

## Cambiar datos de la IBO

Edita [src/config/site.ts](src/config/site.ts):

- `ownerName`
- `siteName`
- `tagline`
- `email`
- `whatsapp`
- `whatsappMessage`
- `myShopUrl`
- `disclosureShort`

## Cambiar WhatsApp

En [src/config/site.ts](src/config/site.ts), reemplaza:

```ts
whatsapp: "+10000000000"
```

Usa formato internacional, por ejemplo `+1...`.

## Reemplazar productos demo

Edita [src/data/products.ts](src/data/products.ts). Cada producto tiene:

- `slug`
- `name`
- `category`
- `shortDescription`
- `description`
- `forWhom`
- `usage`
- `mariaReason`
- `imageLabel`

Antes de publicar una versión real, reemplaza todo el texto por información oficial y revisada.

## Editar paquetes

Edita [src/data/packages.ts](src/data/packages.ts). Los paquetes incluyen nombre, descripción, público recomendado, productos simulados y rutina sugerida.

## Editar posts

Edita [src/data/posts.ts](src/data/posts.ts). Cada post tiene título, descripción, categoría y párrafos.

## Activar o desactivar demoMode

En [src/config/site.ts](src/config/site.ts):

```ts
demoMode: true
```

Cuando está en `true`, el sitio muestra el banner de demo y agrega `noindex`. Para una versión productiva, cambiar a `false` solo después de reemplazar contenido simulado por información aprobada.

## Reemplazar enlace MyShop

Actualiza `myShopUrl` en [src/config/site.ts](src/config/site.ts). La página `/myshop-demo` está simulada; para una versión real se debería revisar el flujo legal, visual y comercial antes de enlazar directamente.

## Pendientes para convertirlo en MVP real

- Validar textos, productos y enlaces con fuentes oficiales.
- Reemplazar placeholders visuales por imágenes aprobadas.
- Conectar un formulario real con consentimiento y política de privacidad.
- Definir tracking básico y analítica.
- Revisar cumplimiento de marca, disclosures y uso de enlaces autorizados.
- Decidir si productos y posts migran a Content Collections o CMS.
