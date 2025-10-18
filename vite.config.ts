import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "~components": path.resolve(__dirname, "src/components"),
            "~services": path.resolve(__dirname, "src/services"),
            "~styles": path.resolve(__dirname, "src/styles"),
            "~types": path.resolve(__dirname, "src/types"),
            "~utilities": path.resolve(__dirname, "src/utilities")
        }
    }
});
