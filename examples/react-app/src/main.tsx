import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Theme from './Theme.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
