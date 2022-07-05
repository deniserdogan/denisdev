import { ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import App from './App'
import './index.css'

import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
)
