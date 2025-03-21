import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: 'public/index.html',
  },
  output: {
    distPath: {
      root: process.env.NODE_ENV === 'production' ? './build' : './dist'
    }
  }
})
