import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { EmptyList } from '../EmptyList'
import { ListItem } from '../ListItem'
import {
  ConcludedTasksContainer,
  CreatedTasksContainer,
  FormContainer,
  InputForm,
  TaskListContainer,
  TasksCounterContainer,
} from './styles'

import { v4 as uuidv4 } from 'uuid'

interface Task {
  id: string
  taskName: string
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')
  const [concludedTasks, setConcludedTasks] = useState<Task[]>([])

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault()

    setTasks([...tasks, { id: uuidv4(), taskName: newTask }])
    setNewTask('')
  }

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('Preencher este campo!')
  }

  const deleteTask = (taskToDelete: Task) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete.id
    })
    console.log(tasksWithoutDeletedOne)

    const tasksCompletedWithoutDeletedOne = concludedTasks.filter((task) => {
      return task.id !== taskToDelete.id
    })

    setTasks(tasksWithoutDeletedOne)
    setConcludedTasks(tasksCompletedWithoutDeletedOne)
  }

  const checkTask = (task: Task, checkedTasks: string | boolean) => {
    if (checkedTasks) {
      setConcludedTasks([...concludedTasks, task])
    } else {
      const filteredTasks = concludedTasks.filter((concludedTask) => {
        return concludedTask.id !== task.id
      })
      console.log(filteredTasks)
      setConcludedTasks(filteredTasks)
    }
  }

  const tasksCreated = tasks.length
  const hasNoTask = tasks.length === 0

  return (
    <TaskListContainer>
      <FormContainer>
        <h1>Minhas tarefas</h1>
        <InputForm onSubmit={handleCreateNewTask}>
          <input
            name="task"
            placeholder="Adicione uma tarefa"
            type="text"
            value={newTask}
            onChange={handleNewTaskChange}
            onInvalid={handleNewTaskInvalid}
            required
            autoComplete="off"
          />
          <button type="submit">
            <PlusCircle size={16} />
          </button>
        </InputForm>
      </FormContainer>

      <TasksCounterContainer>
        <CreatedTasksContainer>
          <h1>Criadas</h1>
          <strong>{tasksCreated}</strong>
        </CreatedTasksContainer>
        <ConcludedTasksContainer>
          <h1>Concluídas</h1>
          <strong>{`${concludedTasks.length} de ${tasksCreated}`}</strong>
        </ConcludedTasksContainer>
      </TasksCounterContainer>

      {hasNoTask ? (
        <EmptyList />
      ) : (
        tasks.map((task) => {
          return (
            <ListItem
              key={task.id}
              task={task}
              onDeleteTask={deleteTask}
              onCheckTask={checkTask}
            />
          )
        })
      )}
    </TaskListContainer>
  )
}
