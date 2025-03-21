import type React from 'react'
import type { Task } from '../context'

interface Props {
  tasks: ReadonlyArray<Task>
  onToggleTask: (id: number, completed: boolean) => void
  onDeleteTask: (id: number) => void
}

const TasksList: React.FC<Props> = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div className='card white darken-1'>
      <div className='card-content'>
        {tasks?.map(task => (
          <ul className='row' key={task.id}>
            <li>
              <p className='col s10'>
                <label>
                  <input
                    onChange={() => onToggleTask(task.id, task.completed)}
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
                onClick={() => onDeleteTask(task.id)}
                className='col s2 material-icons delete-button'
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onDeleteTask(task.id)
                  }
                }}
              >
                delete
              </i>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default TasksList
