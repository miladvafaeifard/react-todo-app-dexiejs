import React, { type FormEvent } from 'react'
import { useContext } from 'react'
import './App.css'
import { useLiveQuery } from 'dexie-react-hooks'
import TasksList from './components/TasksList'
import { type Task, TodoServiceContext } from './context'
import { die } from './util/helpers'

const App = () => {
  const todoService =
    useContext(TodoServiceContext) || die('todo service is not provided.')
  const tasks = useLiveQuery<ReadonlyArray<Task>, ReadonlyArray<Task>>(
    () => todoService.getAllTodos(),
    [],
    [],
  )

  const addTask = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const task = document.querySelector('#taskInput') as HTMLInputElement | null

    if (task?.value) {
      await todoService.addTodo(task.value)
      task.value = ''
    }
  }

  const deleteTask = async (id: number) => await todoService.deleteTodo(id)

  const toggleTask = async (id: number, completed: boolean) =>
    await todoService.toggleTodo(id, !completed)

  return (
    <div className='container'>
      <h3 className='teal-text center-align'>Todo App</h3>
      <form className='add-item-form' onSubmit={addTask}>
        <input
          id='taskInput'
          type='text'
          className='itemField'
          placeholder='What do you want to do today?'
          required
        />
        <button type='submit' className='waves-effect btn teal right'>
          Add
        </button>
      </form>

      <TasksList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App
