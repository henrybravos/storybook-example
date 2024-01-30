import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from "node:module";
import path from "path";
const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "msw/native": require.resolve(
        path.resolve(__dirname, "./node_modules/msw/lib/native/index.mjs")
      ),
    },
  },
});
