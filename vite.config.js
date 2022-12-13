import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "https://yiorgosbagakis.github.io/react-random-words/",
  plugins: [react()],
})
