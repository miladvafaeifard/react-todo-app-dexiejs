import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoServiceContext } from './context'
import * as todoService from './services/todoService'

const root = document.getElementById('root') as HTMLElement | null

if (root) {
  const main = ReactDOM.createRoot(root)
  main.render(
    <React.StrictMode>
      <TodoServiceContext.Provider value={todoService}>
        <App />
      </TodoServiceContext.Provider>
    </React.StrictMode>,
  )
} else {
  throw Error(`Couldn't find root element`)
}
