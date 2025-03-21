import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: './public/index.html',
    favicon: './public/favicon.ico',
    appIcon: {
      name: 'React Todo App DexieJs',
      icons: [
        { src: './public/logo192.png', size: 192 },
        { src: './public/logo512.png', size: 512 },
      ],
    },
  },
  server: {
    base: process.env.NODE_ENV === 'production' ? '/react-todo-app-dexiejs' : '/',
  },
  output: {
    distPath: {
      root: process.env.NODE_ENV === 'production' ? './build' : './dist',
    },
  },
});
