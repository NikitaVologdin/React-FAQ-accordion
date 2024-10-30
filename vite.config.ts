import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import postcssxtorem from "postcss-pxtorem";
// import postcssUtilities from "postcss-utilities";
// import postcssPresetEnv from "postcss-preset-env";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [] } },
});
