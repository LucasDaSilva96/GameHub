import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType: "prompt",
  includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "GameHub",
    short_name: "GH",
    description: "E-Shop for games",
    icons: [
      {
        src: "/android-chrome-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "favicon",
      },

      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/mstile-150x150.png",
        sizes: "150x150",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA(manifestForPlugIn), react()],
});
