import type React from 'react'
import type { Task as TypeType } from '../context'
import Task from './Task'

interface Props {
  tasks: ReadonlyArray<TypeType>
  onToggleTask: (id: number, completed: boolean) => void
  onDeleteTask: (id: number) => void
}

const TasksList: React.FC<Props> = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div className='card white darken-1'>
      <div className='card-content'>
        <ul className='row'>
          {tasks?.map(task => (
            <Task
              key={task.id}
              task={task}
              onToggle={onToggleTask}
              onDelete={onDeleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TasksList
