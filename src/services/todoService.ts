import { type Todo, todos } from './repoService'

export interface TodoService {
  readonly getAllTodos: () => Promise<ReadonlyArray<Todo>>
  readonly addTodo: (title: string) => Promise<void>
  readonly deleteTodo: (id: number) => Promise<void>
  readonly toggleTodo: (id: number, completed: boolean) => Promise<void>
}

const getAllTodos = async (): Promise<ReadonlyArray<Todo>> =>
  await todos.toArray()

const addTodo = async (title: string): Promise<void> => {
  await todos.add({
    title,
    completed: false,
    date: new Date().toLocaleString(),
  })
}

const deleteTodo = async (id: number): Promise<void> => await todos.delete(id)

const toggleTodo = async (id: number, completed: boolean): Promise<void> => {
  await todos.update(id, { completed: completed })
}

export { getAllTodos, addTodo, deleteTodo, toggleTodo }
