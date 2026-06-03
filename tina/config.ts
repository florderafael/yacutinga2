import { defineConfig } from "tinacms";

// La rama y las claves vienen de variables de entorno (las pegás en Hostinger).
const branch =
  process.env.TINA_BRANCH ||
  process.env.VITE_TINA_BRANCH ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || process.env.VITE_TINA_CLIENT_ID || "", // Tina Cloud -> Client ID
  token: process.env.TINA_TOKEN || "", // Tina Cloud -> Read Only Token

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "packages",
        label: "Paquetes",
        path: "content/packages",
        format: "json",
        ui: {
          // Es un único archivo: no se crean ni borran documentos.
          allowedActions: { create: false, delete: false },
        },
        fields: [
          // ---- Encabezado de la sección ----
          { type: "string", name: "headerKickerEs", label: "Bajada (ES)" },
          { type: "string", name: "headerKickerEn", label: "Bajada (EN)" },
          { type: "string", name: "headerTitleEs", label: "Título (ES)" },
          { type: "string", name: "headerTitleEn", label: "Título (EN)" },

          // ---- Lista de paquetes ----
          {
            type: "object",
            name: "items",
            label: "Paquetes",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.nameEs || "Paquete" }),
            },
            fields: [
              { type: "image", name: "image", label: "Foto" },
              { type: "string", name: "nameEs", label: "Nombre (ES)" },
              { type: "string", name: "nameEn", label: "Nombre (EN)" },
              { type: "string", name: "nightsEs", label: "Noches (ES)" },
              { type: "string", name: "nightsEn", label: "Noches (EN)" },
              { type: "string", name: "descEs", label: "Descripción (ES)", ui: { component: "textarea" } },
              { type: "string", name: "descEn", label: "Descripción (EN)", ui: { component: "textarea" } },
              { type: "string", name: "priceEs", label: "Precio (ES) — opcional" },
              { type: "string", name: "priceEn", label: "Precio (EN) — opcional" },
              {
                type: "string",
                name: "panel",
                label: "Color del panel",
                options: [
                  { value: "#1B2E1C", label: "Verde oscuro" },
                  { value: "#3D5A3E", label: "Verde medio" },
                ],
              },
              { type: "string", name: "objPos", label: "Encuadre de la foto (avanzado)" },
              {
                type: "object",
                name: "details",
                label: "Incluye",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.es || "Detalle" }) },
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Ícono",
                    options: [
                      { value: "moon", label: "Luna (noches)" },
                      { value: "meals", label: "Comidas" },
                      { value: "walks", label: "Caminatas" },
                      { value: "bird", label: "Aves" },
                      { value: "kayak", label: "Kayak" },
                      { value: "community", label: "Comunidad" },
                      { value: "transfer", label: "Traslado" },
                    ],
                  },
                  { type: "string", name: "es", label: "Texto (ES)" },
                  { type: "string", name: "en", label: "Texto (EN)" },
                ],
              },
            ],
          },

          // ---- Nota al pie ----
          { type: "string", name: "noteEs", label: "Nota al pie (ES)" },
          { type: "string", name: "noteEn", label: "Nota al pie (EN)" },
        ],
      },
    ],
  },
});
