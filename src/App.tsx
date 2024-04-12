// import { useState } from 'react'
import { Box, Stack } from '@mui/material'
import { Header } from './components'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <Stack spacing={4}>
      <Header />
      <Box px={5}>
        <span>Vite + React</span>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Box>
    </Stack>
  )
}

export default App
