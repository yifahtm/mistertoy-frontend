import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './assets/style/main.scss'
import { AppHeader } from './cmps/AppHeader.jsx'
// import { AppFooter } from './cmps/AppFooter'
import { HomePage } from './pages/HomePage.jsx'
import { About } from './pages/About.jsx'
import { store } from './store/store.js'
import { ToyIndex } from './pages/ToyIndex.jsx'
import { ToyEdit } from './pages/ToyEdit.jsx'
import { ToyDetails } from './pages/ToyDetails.jsx'
import { Dashboard } from './pages/Dashboard.jsx'

export function RootCmp() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <AppHeader />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/toy" element={<ToyIndex />} />
              <Route path="/toy/details/:toyId" element={<ToyDetails />} />
              <Route path="/toy/edit/:toyId" element={<ToyEdit />} />
              <Route path="/toy/edit" element={<ToyEdit />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          {/* <AppFooter /> */}
        </div>
      </Router>
    </Provider>
  )
}
