import React from 'react'
import type { TodoService } from './services/todoService'

export const TodoServiceContext = React.createContext<TodoService | null>(null)
