import { Clipboard } from 'phosphor-react'
import { EmptyListContainer } from './styles'

export function EmptyList() {
  return (
    <EmptyListContainer>
      <Clipboard size={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </EmptyListContainer>
  )
}
