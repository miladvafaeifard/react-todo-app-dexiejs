import React from 'react'
import './App.css'
import { useLiveQuery } from 'dexie-react-hooks'

import type { TodoService } from './services/todoService'

interface Props {
  todoService: TodoService
}

const App = ({ ...props }: Props) => {
  const todoService = props.todoService
  const tasks = useLiveQuery(() => todoService.getAllTodos(), [])

  const addTask = async (event: Event) => {
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

      <div className='card white darken-1'>
        <div className='card-content'>
          {tasks?.map(task => (
            <div className='row' key={task.id}>
              <p className='col s10'>
                <label>
                  <input
                    onChange={() => toggleTask(task.id, task.completed)}
                    type='checkbox'
                    checked={task.completed}
                    className='checkbox-blue'
                  />
                  <span
                    className={`black-text ${task.completed && 'strike-text'}`}
                  >
                    {task.title}
                  </span>
                </label>
              </p>
              <i
                onClick={() => deleteTask(task.id)}
                className='col s2 material-icons delete-button'
              >
                delete
              </i>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
