import { Dexie, type EntityTable } from 'dexie'

export interface Todo {
  id: number
  title: string
  completed: boolean
  date: string
}

const db = new Dexie('todoApp') as Dexie & {
  todos: EntityTable<Todo, 'id'>
}

db.version(1).stores({
  todos: '++id,title,completed,date',
})

export const todos = db.todos
