import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Person from '../components/Person.jsx'
import NavBar from '../components/Navbar.jsx'
import Ternary from '../components/Ternary.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    {/* <Ternary></Ternary> */}
    <App></App>
    </StrictMode>

)
