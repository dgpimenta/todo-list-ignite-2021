import styled from 'styled-components'

export const TaskListContainer = styled.div`
  max-width: 50rem;
  margin: auto;
  color: ${(props) => props.theme['text-light']};
  background: ${(props) => props.theme.shapes};

  border-radius: 8px;
  padding: 4rem 2rem;
  margin-block: -9rem 2rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
    max-width: 39rem;
  }

  @media (max-width: 540px) {
    max-width: 21rem;
    font-size: 75%;
  }

  @media (max-width: 280px) {
    max-width: 15rem;
    padding: 2rem 0.5rem;
    font-size: 75%;
  }
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.5rem;

  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const InputForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  input {
    border-radius: 8px;
    border: none;
    padding: 12px 24px;

    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};

    &::placeholder {
      color: ${(props) => props.theme['text-light']};
    }

    @media (max-width: 540px) {
      padding: 12px 12px;
    }

    @media (max-width: 280px) {
      width: 11rem;
    }
  }

  button {
    background: ${(props) => props.theme.green};
    color: ${(props) => props.theme.shapes};

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    border: none;
    padding: 12px 12px;

    cursor: pointer;

    transition: background-color 0.1s;

    &:hover {
      background: ${(props) => props.theme['green-light']};
    }
  }
`

export const TasksCounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4rem;
`

export const TasksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h1 {
    font-size: 0.9rem;
    color: ${(props) => props.theme.blue};
  }

  strong {
    font-size: 0.8rem;
    padding: 0.125rem 0.5rem;
    border-radius: 0.9rem;

    background: ${(props) => props.theme['green-light']};
    color: ${(props) => props.theme.shapes};

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 280px) {
    gap: 0.2rem;
  }
`

export const CreatedTasksContainer = styled(TasksContainer)``

export const ConcludedTasksContainer = styled(TasksContainer)``
