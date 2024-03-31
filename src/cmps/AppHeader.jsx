// import { useSelector } from 'react-redux'
// import { NavLink } from 'react-router-dom'

// export function AppHeader() {
//     const user = useSelector(storeState => storeState.userModule.loggedInUser)

//     return (
//         <section className="app-header main-layout full">
//             <div className="flex align-center justify-between">
//                 <h1 className="main-title ">Toys will be Toys</h1>

//                 <nav className="main-nav flex align-center">
//                     <NavLink to="/">Home</NavLink>
//                     <NavLink to="/about">About</NavLink>
//                     <NavLink to="/toy">Toys</NavLink>

//                     {user && user.isAdmin && <NavLink to="/dashboard">Dashboard</NavLink>}
//                     {!user && <NavLink to="/login">Login</NavLink>}
//                 </nav>
//             </div>
//         </section>
//     )
// }





import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
    return <header className="main-header" >
        <nav className="header-nav container">
            <h1>TOYS WILL BE TOYS</h1>
            <NavLink className="header-link" to="/">Home</NavLink>
            <NavLink className="header-link" to="/toy">Toys</NavLink>
        </nav>
    </header>
}
