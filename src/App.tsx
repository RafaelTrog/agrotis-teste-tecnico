import { Box, Stack, ThemeProvider } from '@mui/material'
import { Form, Header } from './components'
import { theme } from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={4}>
        <Header />
        <Box px={5}>
          <Form />
        </Box>
      </Stack>
    </ThemeProvider>
  )
}

export default App
