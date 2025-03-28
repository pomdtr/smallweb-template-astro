import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
    output: "server",
    outDir: "./deno/dist",
    adapter: deno({
        start: false
    }),
    vite: {
        ssr: {
            noExternal: true
        }
    }
});
