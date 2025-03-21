import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: 'public/index.html',
  },
  // root: process.env.NODE_ENV === 'production' ? './react-todo-app-dexiejs' : './',
  server: {
    base: process.env.NODE_ENV === 'production' ? '/react-todo-app-dexiejs' : '/',
  },
  output: {
    distPath: {
      root: process.env.NODE_ENV === 'production' ? './build' : './dist'
    }
  }
})
