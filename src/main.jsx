import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.scss'
import App from './App.jsx';
import {Provider} from 'react-redux';
import {store} from './Features/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
