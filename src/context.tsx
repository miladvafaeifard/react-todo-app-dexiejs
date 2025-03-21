import React from 'react'
import type { TodoService } from './services/todoService'

export interface Task {
  id: number
  title: string
  completed: boolean
}

export const TodoServiceContext = React.createContext<TodoService | null>(null)
