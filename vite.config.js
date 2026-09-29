import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` gera o site normal (dist/).
// `npm run build:preview` gera um único HTML autocontido (preview/), bom para mandar ao cliente.
export default defineConfig(({ mode }) => ({
  plugins: mode === 'preview' ? [react(), viteSingleFile()] : [react()],
  build: mode === 'preview'
    ? { outDir: 'preview', assetsInlineLimit: 100_000_000, cssCodeSplit: false }
    : { outDir: 'dist' },
}))
