import React from 'react'
import type { TodoService } from './services/todoService'
import { die } from './util/helpers';
export interface Task {
  id: number
  title: string
  completed: boolean
}

const TodoServiceContext = React.createContext<TodoService | null>(null)

const useTodoService = () => {
  const context = React.useContext(TodoServiceContext);
  if (!context) {
    die('Todo service is not provided.');
  }
  return context;
};

export { TodoServiceContext, useTodoService };
