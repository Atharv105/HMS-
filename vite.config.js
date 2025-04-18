import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import flowbiteReact from "flowbite-react/plugin/vite";



// https://vite.dev/config/
export default defineConfig({

  server : {
    host : "0.0.0.0",
      fs : {
          strict : false,
      },
  },

  plugins: [react(), tailwindcss(), flowbiteReact()],
})