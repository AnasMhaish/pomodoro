import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import appReducer from './redux/reducers/index.ts'

import App from './App.tsx'
import './index.css'

const store = configureStore({
  reducer: {
    appReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

