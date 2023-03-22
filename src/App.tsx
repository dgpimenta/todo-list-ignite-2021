import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <TaskList />
      <GlobalStyle />
    </ThemeProvider>
  )
}
