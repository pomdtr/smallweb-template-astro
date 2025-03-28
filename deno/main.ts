import { handle } from "./dist/server/entry.mjs";
import { serveDir } from "jsr:@std/http"

export default {
    fetch: async (req: Request) => {
        const resp = await serveDir(req, {
            fsRoot: "./dist/client",
        })
        if (resp.ok) {
            return resp
        }

        return handle(req)
    }
}
