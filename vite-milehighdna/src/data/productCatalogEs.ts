// src/data/productCatalogEs.ts
/**
 * Spanish display copy for the at-home DNA test product catalog.
 * Prices, Stripe price IDs, categories, and product keys are inherited from
 * productCatalog.ts (single source of truth) — only display copy is translated.
 */

import { PRODUCT_CATALOG } from "./productCatalog";

const PRODUCT_COPY_ES: Record<
  keyof typeof PRODUCT_CATALOG,
  {
    name: string;
    shortDescription: string;
    participantSummary: string;
    metaDescription: string;
    breadcrumbParentLabel: string;
  }
> = {
  // ─────────────────────────
  // PATERNIDAD
  // ─────────────────────────
  PATERNITY_AT_HOME_SINGLE: {
    name: "Prueba de Paternidad en Casa (2 Participantes)",
    shortDescription:
      "Prueba de ADN privada para confirmar la paternidad biológica. Un hijo, un presunto padre, una ubicación. Kit por correo con resultados confidenciales.",
    participantSummary: "1 Hijo / 1 Presunto Padre · 1 Ubicación",
    metaDescription:
      "Ordene el kit de prueba de paternidad en casa. Prueba privada, precisa y por correo con resultados rápidos. Envío nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de Paternidad",
  },

  PATERNITY_AT_HOME_MULTI_CHILD: {
    name: "Prueba de Paternidad en Casa (3 Participantes)",
    shortDescription:
      "Prueba de paternidad de tranquilidad para familias con dos o más hijos. Una ubicación. La misma precisión y confidencialidad que nuestra prueba de un solo hijo.",
    participantSummary: "2+ Hijos · 1 Ubicación",
    metaDescription:
      "Prueba de paternidad en casa para varios hijos. Privada, precisa y por correo. Envío nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de Paternidad",
  },

  PATERNITY_MULTI_LOCATION: {
    name: "Prueba de Paternidad en Casa Multi-Ubicación",
    shortDescription:
      "Cuando el hijo y el presunto padre están en lugares diferentes. Dos kits enviados a dos direcciones. Mismo laboratorio, misma precisión, resultados confidenciales.",
    participantSummary: "1 Hijo / 1 Presunto Padre · 2 Ubicaciones",
    metaDescription:
      "Prueba de paternidad en casa con kits enviados a dos ubicaciones. Privada, precisa y por correo. Nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de Paternidad",
  },

  PATERNITY_PEACE_OF_MIND: {
    name: "Prueba de Paternidad de Tranquilidad",
    shortDescription:
      "Confirmación privada y no legal de la paternidad biológica. Una ubicación. Solo para conocimiento personal — no válida para corte ni inmigración.",
    participantSummary: "Confirmación privada · 1 Ubicación",
    metaDescription:
      "Prueba de paternidad de tranquilidad. Confirmación privada, kit por correo. No válida para uso legal ni en corte.",
    breadcrumbParentLabel: "Kits de Prueba de Paternidad",
  },

  FAST_TRACK_RESULTS: {
    name: "Servicio de Resultados Acelerados",
    shortDescription:
      "Procesamiento acelerado para obtener resultados más rápido. Agregue este servicio a su pedido para prioridad en el laboratorio. Resultados generalmente en 1 a 2 días hábiles después de la recepción en el laboratorio.",
    participantSummary: "",
    metaDescription:
      "Resultados acelerados de prueba de ADN. Procesamiento prioritario para pruebas de paternidad en casa. Envío nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de Paternidad",
  },

  // ─────────────────────────
  // ABUELIDAD
  // ─────────────────────────
  GRANDPARENT_SINGLE_LOCATION: {
    name: "Prueba de ADN de Abuelidad en Casa (2 Participantes)",
    shortDescription:
      "Establezca relaciones biológicas cuando uno de los padres no está disponible. Un nieto, un abuelo, una ubicación. Kit por correo con resultados confidenciales.",
    participantSummary: "1 Nieto / 1 Abuelo · 1 Ubicación",
    metaDescription:
      "Prueba de ADN de abuelidad en casa. Un nieto, un abuelo, una ubicación. Privada, precisa y por correo. Envío nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de Abuelidad",
  },

  GRANDPARENT_MULTI_LOCATION: {
    name: "Prueba de ADN de Abuelidad Multi-Ubicación",
    shortDescription:
      "Cuando el nieto y el abuelo están en lugares diferentes. Dos kits enviados a dos direcciones. Mismo laboratorio, misma precisión, resultados confidenciales.",
    participantSummary: "1 Nieto / 1 Abuelo · 2 Ubicaciones",
    metaDescription:
      "Prueba de ADN de abuelidad multi-ubicación. Kits enviados a dos direcciones. Privada, precisa y por correo. Nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de Abuelidad",
  },

  GRANDPARENT_PEACE_OF_MIND: {
    name: "Prueba de ADN de Abuelidad de Tranquilidad",
    shortDescription:
      "Confirmación privada de la relación entre abuelo y nieto. Una ubicación. Solo para conocimiento personal — no válida para corte ni inmigración.",
    participantSummary: "Confirmación privada · 1 Ubicación",
    metaDescription:
      "Prueba de ADN de abuelidad de tranquilidad. Confirmación privada, kit por correo. No válida para uso legal ni en corte.",
    breadcrumbParentLabel: "Kits de Prueba de Abuelidad",
  },

  // ─────────────────────────
  // HERMANDAD
  // ─────────────────────────
  SIBLING_SINGLE_LOCATION: {
    name: "Prueba de Hermandad en Casa",
    shortDescription:
      "Determine si dos personas comparten uno o ambos padres biológicos. Dos hermanos, una ubicación. Kit por correo con resultados confidenciales.",
    participantSummary: "2 Hermanos · 1 Ubicación",
    metaDescription:
      "Prueba de ADN de hermandad en casa. Dos hermanos, una ubicación. Privada, precisa y por correo. Envío nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de Hermandad",
  },

  SIBLING_MULTI_LOCATION: {
    name: "Prueba de Hermandad Multi-Ubicación",
    shortDescription:
      "Cuando los hermanos están en lugares diferentes. Dos kits enviados a dos direcciones. Mismo laboratorio, misma precisión, resultados confidenciales.",
    participantSummary: "2 Hermanos · 2 Ubicaciones",
    metaDescription:
      "Prueba de ADN de hermandad multi-ubicación. Kits enviados a dos direcciones. Privada, precisa y por correo. Nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de Hermandad",
  },

  SIBLING_PEACE_OF_MIND: {
    name: "Prueba de Hermandad de Tranquilidad",
    shortDescription:
      "Confirmación privada de la relación entre hermanos. Solo para conocimiento personal — no válida para corte ni inmigración.",
    participantSummary: "Confirmación privada de relación entre hermanos",
    metaDescription:
      "Prueba de ADN de hermandad de tranquilidad. Confirmación privada, kit por correo. No válida para uso legal ni en corte.",
    breadcrumbParentLabel: "Kits de Prueba de Hermandad",
  },

  // ─────────────────────────
  // DISCRETAS
  // ─────────────────────────
  DISCREET_AT_HOME_DNA_TEST: {
    name: "Prueba de ADN Discreta en Casa",
    shortDescription:
      "Prueba privada utilizando artículos personales como cepillo de dientes, cabello, cerumen y más. Una ubicación. Manejo y resultados confidenciales.",
    participantSummary: "Cepillo de dientes, cabello, cerumen, etc. · 1 Ubicación",
    metaDescription:
      "Prueba de ADN discreta en casa con artículos personales. Privada, confidencial y por correo. Envío nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de ADN Discreta",
  },

  DISCREET_HAIR_FOLICLE: {
    name: "Prueba de ADN Discreta con Folículo Capilar",
    shortDescription:
      "Prueba privada utilizando muestras de folículo capilar. Una ubicación. Manejo y resultados confidenciales.",
    participantSummary: "1 Ubicación",
    metaDescription:
      "Prueba de ADN discreta con folículo capilar. Privada, confidencial y por correo. Envío nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de ADN Discreta",
  },

  DISCREET_TWO_TOOTHBRUSH: {
    name: "Prueba de ADN Discreta con Dos Cepillos de Dientes",
    shortDescription:
      "Prueba utilizando muestras del presunto padre y del hijo. Recolección discreta, la misma precisión de laboratorio.",
    participantSummary: "Presunto Padre e Hijo",
    metaDescription:
      "Prueba de ADN discreta con dos muestras. Presunto padre e hijo. Privada y confidencial. Nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de ADN Discreta",
  },

  DISCREET_TOOTHBRUSH: {
    name: "Prueba de ADN Discreta con Cepillo de Dientes",
    shortDescription:
      "Prueba de paternidad utilizando muestras de cepillo de dientes cuando la recolección directa no es posible. Una muestra, una ubicación.",
    participantSummary: "1 Muestra · 1 Ubicación",
    metaDescription:
      "Prueba de ADN discreta con cepillo de dientes. Privada y confidencial. Envío nacional e internacional.",
    breadcrumbParentLabel: "Kits de Prueba de ADN Discreta",
  },

  DISCREET_PEACE_OF_MIND_DNA_TEST: {
    name: "Prueba de ADN Discreta de Tranquilidad",
    shortDescription:
      "Confirmación privada utilizando métodos de recolección discretos. Solo para conocimiento personal — no válida para corte ni inmigración.",
    participantSummary: "Confirmación privada",
    metaDescription:
      "Prueba de ADN discreta de tranquilidad. Confirmación privada, por correo. No válida para uso legal ni en corte.",
    breadcrumbParentLabel: "Kits de Prueba de ADN Discreta",
  },
};

/**
 * Get a product by key with Spanish display copy merged over the base
 * catalog entry (price, category, categorySlug, stripePriceId unchanged).
 */
export function getProductEsByKey(key: string) {
  const base = PRODUCT_CATALOG[key as keyof typeof PRODUCT_CATALOG];
  const copy = PRODUCT_COPY_ES[key as keyof typeof PRODUCT_COPY_ES];
  if (!base || !copy) return null;
  return { ...base, ...copy };
}

/**
 * All products with Spanish display copy, in catalog order.
 */
export function getAllProductsEs() {
  return Object.keys(PRODUCT_CATALOG).map((key) => ({
    key,
    ...getProductEsByKey(key)!,
  }));
}
