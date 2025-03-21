import React from 'react'
import './App.css'
import { Dexie } from 'dexie'
import { useLiveQuery } from 'dexie-react-hooks'

const db = new Dexie('todoApp')
db.version(1).stores({
  todos: '++id,title,completed,date'
})

const { todos } = db;

const App = () => {

  const tasks = useLiveQuery(() => todos.toArray(), [])
  
  const addTask = async (event) => {
    event.preventDefault()
    const task = document.querySelector('#taskInput')

    if (task.value) {
      await todos.add({
        title: task.value,
        completed: false,
        date: new Date().toLocaleString()
      })
    }

    task.value = ''
  }

  const deleteTask = async (id) => await todos.delete(id)

  const toggleTask = async (id, completed) => await todos.update(id, { completed: !completed })

  return (
    <div className="container">
      <h3 className="teal-text center-align">Todo App</h3>
      <form className="add-item-form" onSubmit={addTask}>
        <input
          id="taskInput"
          type="text"
          className="itemField"
          placeholder="What do you want to do today?"
          required
        />
        <button type="submit" className="waves-effect btn teal right">
          Add
        </button>
      </form>

      <div className="card white darken-1">
        <div className="card-content">
          {
            tasks?.map(task => (
              <div className="row" key={task.id}>
                <p className="col s10">
                  <label>
                    <input 
                      onChange={() => toggleTask(task.id, task.completed)}
                    type="checkbox" checked={task.completed} className="checkbox-blue" />
                    <span className={`black-text ${task.completed && 'strike-text'}`}>{task.title}</span>
                  </label>
                </p>
                <i 
                  onClick={() => deleteTask(task.id)}
                  className="col s2 material-icons delete-button">
                    delete
                </i>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
