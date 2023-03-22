import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { CheckboxContainer, IconContainerButton, ItemContainer } from './styles'

interface TaskData {
  id: string
  taskName: string
}

interface TaskProps {
  task: TaskData
  onDeleteTask: (task: TaskData) => void
  onCheckTask: (task: TaskData, isChecked: string | boolean) => void
}

export function ListItem({ task, onDeleteTask, onCheckTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  function handleDeleteTask() {
    onDeleteTask(task)
  }

  function handleCheckTask(checked: string | boolean) {
    if (checked) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
    onCheckTask(task, checked)
  }

  return (
    <CheckboxContainer>
      <ItemContainer>
        <Checkbox.Root
          id={task.id}
          checked={isChecked}
          className="CheckboxRoot"
          onCheckedChange={(checked) => handleCheckTask(checked)}
        >
          <Checkbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={isChecked ? 'checkedboxLabel' : 'checkboxLabel'}>
          {task.taskName}
        </label>
      </ItemContainer>
      <IconContainerButton onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={18} />
      </IconContainerButton>
    </CheckboxContainer>
  )
}
