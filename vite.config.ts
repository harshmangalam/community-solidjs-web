import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";
export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
