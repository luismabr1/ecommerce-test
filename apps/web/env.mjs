import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  skipValidation: process.env.NODE_ENV !== "production" || process.env.SKIP_ENV_VALIDATION === "true",
  server: {
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string(),
    SHOPIFY_ADMIN_ACCESS_TOKEN: z.string().optional(),
    SHOPIFY_APP_API_SECRET_KEY: z.string().optional(),
    SHOPIFY_STORE_DOMAIN: z.string(),
    MEILISEARCH_MASTER_KEY: z.string().optional(),
    MEILISEARCH_HOST: z.string().optional(),
    REPLICATE_API_KEY: z.string().optional(),
    LIVE_URL: z.string().optional(),
    GTM_ID: z.string().optional().default(),
    IS_GTM_ENABLED: z.enum(["true", "false"]).optional(),
    IS_SPEED_INSIGHTS_ENABLED: z.enum(["true", "false"]).optional(),
    IS_VERCEL_ANALYTICS_ENABLED: z.enum(["true", "false"]).optional(),
    IS_DEMO_MODE: z.enum(["true", "false"]).optional(),
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
  },
  client: {},
  runtimeEnv: {
    IS_DEMO_MODE: process.env.NEXT_PUBLIC_IS_DEMO_MODE,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "demo",
    SHOPIFY_ADMIN_ACCESS_TOKEN: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN || "demo",
    SHOPIFY_APP_API_SECRET_KEY: process.env.SHOPIFY_APP_API_SECRET_KEY,
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN || "demo",
    MEILISEARCH_MASTER_KEY: process.env.MEILISEARCH_MASTER_KEY || "demo",
    MEILISEARCH_HOST: process.env.MEILISEARCH_HOST || "demo",
    LIVE_URL: process.env.LIVE_URL || "https://commerce.blazity.com",
    ANALYZE: process.env.ANALYZE,
    IS_GTM_ENABLED: process.env.IS_GTM_ENABLED,
    IS_VERCEL_ANALYTICS_ENABLED: process.env.IS_VERCEL_ANALYTICS_ENABLED || "true",
    IS_SPEED_INSIGHTS_ENABLED: process.env.IS_SPEED_INSIGHTS_ENABLED || "true",
    GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    REPLICATE_API_KEY: process.env.REPLICATE_API_KEY,
  },
})
