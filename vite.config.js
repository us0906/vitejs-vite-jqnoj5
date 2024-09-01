// https://vitejs.dev/config/
import {defineConfig} from "vite";
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
    build: {
        chunkSizeWarningLimit: 1600,
        rollupOptions: {
            input: {
                app: 'index.html',
            },
        },
    },
});
/*
<script type="text/javascript" src="/shared/extjs/adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="/shared/extjs/ext-all-debug.js"></script>
*/