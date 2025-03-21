import type React from 'react'
import type { Task as TypeType } from '../context'

interface Props {
  task: TypeType
  onToggle: (id: number, completed: boolean) => void
  onDelete: (id: number) => void
}

const Task: React.FC<Props> = ({ task, onToggle, onDelete }) => {
  return (
    <li key={task.id}>
      <p className='col s10'>
        <label>
          <input
            onChange={() => onToggle(task.id, !task.completed)}
            type='checkbox'
            checked={task.completed}
            className='checkbox-blue'
          />
          <span className={`black-text ${task.completed && 'strike-text'}`}>
            {task.title}
          </span>
        </label>
      </p>
      <i
        onClick={() => onDelete(task.id)}
        className='col s2 material-icons delete-button'
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            onDelete(task.id)
          }
        }}
      >
        delete
      </i>
    </li>
  )
}

export default Task
