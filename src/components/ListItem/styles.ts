import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;

  padding-block: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.background};

  max-width: 50rem;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 0.5rem;

  .CheckboxRoot {
    background: ${(props) => props.theme.shapes};
    border: 1px solid ${(props) => props.theme.background};

    width: 20px;
    height: 20px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 540px) {
      width: 15px;
      height: 15px;
    }

    &:hover {
      background: ${(props) => props.theme.background};
    }

    .CheckboxIndicator {
      color: ${(props) => props.theme.shapes};
      background: ${(props) => props.theme.blue};
      border: 1px solid ${(props) => props.theme.blue};

      width: 20px;
      height: 20px;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 540px) {
        width: 15px;
        height: 15px;
      }
    }
  }

  .checkboxLabel,
  .checkedboxLabel {
    word-break: break-word;
    max-width: 42rem;

    @media (max-width: 820px) {
      max-width: 36rem;
    }

    @media (max-width: 820px) {
      max-width: 27rem;
    }

    @media (max-width: 560px) {
      max-width: 12rem;
    }

    @media (max-width: 280px) {
      max-width: 10rem;
    }
  }

  .checkedboxLabel {
    text-decoration: line-through;
  }
`

export const IconContainerButton = styled.button`
  display: flex;

  border: none;
  background: ${(props) => props.theme.shapes};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.red};
  }
`
