import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts
      server: { entry: "server" },
    }),
    nitro({
      routeRules: {
        "/ingest/static/**": { proxy: "https://us-assets.i.posthog.com/static/**" },
        "/ingest/**": { proxy: "https://us.i.posthog.com/**" },
      },
    }),
    react(),
  ],
});
