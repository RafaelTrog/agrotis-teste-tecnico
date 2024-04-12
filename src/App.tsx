// import { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Form, Header } from './components'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <Stack spacing={4}>
      <Header />
      <Box px={5}>
        <Form />
      </Box>
    </Stack>
  )
}

export default App
