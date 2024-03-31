// import { Provider } from 'react-redux'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import '../src/assets/style/main.css'
// import { store } from './store/store'

// import { HomePage } from './pages/HomePage'
// import { About } from './pages/About'
// import { ToyIndex } from './pages/ToyIndex'
// import { ToyEdit } from './pages/ToyEdit'
// import { ToyDetails } from './pages/ToyDetails'
// import { Dashboard } from './pages/Dashboard'
// import { LoginSignup } from './pages/LoginSignup'

// import { AppHeader } from './cmps/AppHeader'
// import { UserMsg } from './cmps/UserMsg'

// export function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <section className="app main-layout">
//           <AppHeader />

//           <main>
//             <Routes>
//               <Route path="/" element={<HomePage />}></Route>
//               <Route path="/about" element={<About />}></Route>
//               <Route path="/dashboard" element={<Dashboard />}></Route>
//               <Route path="/login" element={<LoginSignup />}></Route>

//               <Route path="/toy" element={<ToyIndex />}></Route>
//               <Route path="/toy/:toyId" element={<ToyDetails />}></Route>
//               <Route path="/toy/edit/:toyId?" element={<ToyEdit />}></Route>
//             </Routes>
//           </main>
//         </section>

//         <UserMsg />
//       </Router>
//     </Provider>
//   )
// }



import React from 'react'
import { Route, Routes } from 'react-router'
import { ToyIndex } from './pages/ToyIndex'
import { ToyEdit } from './pages/ToyEdit'
import { ToyDetails } from './pages/ToyDetails'
import { HomePage } from './pages/HomePage'
import { UserMsg } from './cmps/UserMsg'
import { AppHeader } from './cmps/AppHeader'

export function App() {
  return <main className="main-toy-app">
    <AppHeader />
    <Routes>
      <Route element={<ToyDetails />} path="/toy/details/:toyId" />
      {/* Add&Edit in 1 route */}
      <Route element={<ToyEdit />} path="/toy/edit/:toyId?" />
      <Route element={<ToyIndex />} path="/toy" />
      <Route element={<HomePage />} path="/" />
    </Routes>

    <UserMsg />
  </main >

}


