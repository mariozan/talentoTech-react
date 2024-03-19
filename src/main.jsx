import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/api/apiSlice.js'
// import { Provider } from 'react-redux'
// import store from './store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolvemos el App en el Provider de redux */}
    {/* <Provider store={store}> */}
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)
