// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { App } from './RootCmp.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)



import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { App } from './RootCmp.jsx'
import '../src/assets/style/main.css'



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
