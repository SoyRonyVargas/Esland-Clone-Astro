import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: "static",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "ca"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});