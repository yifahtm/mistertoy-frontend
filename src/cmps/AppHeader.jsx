import { NavLink, useNavigate } from 'react-router-dom'
import { UserMsg } from './UserMsg'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { LoginSignup } from './LoginSignup.jsx'
import { logout } from '../store/actions/user.actions.js'

export function AppHeader() {
    const user = useSelector((storeState) => storeState.userModule.loggedinUser)
    const navigate = useNavigate()

    async function onLogout() {
        try {
            await logout()
            showSuccessMsg('Logout successfully')
            navigate('/')
        } catch (err) {
            console.log('err:', err)
            showErrorMsg('Cannot logout')
        }
    }

    return (
        <header className="app-header">
            <h1>Toys will be Toys</h1>
            {/* <img src="https://img.freepik.com/premium-vector/train-kids-toys-logo-vector_586862-66.jpg?w=2000" alt="" /> */}
            <nav className="nav-container">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/toy" className="toys-link">
                    Toys
                </NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
            {user && (
                <section className="user-info">
                    {/* <p>
            {user.fullname} <span>${user.score.toLocaleString()}</span>
          </p> */}
                    <button onClick={onLogout}>Logout</button>
                </section>
            )}
            {!user && (
                <section className="user-info">
                    <LoginSignup />
                </section>
            )}
            <UserMsg />
        </header>
    )
}
