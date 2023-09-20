import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import cookie from "cookie"
import Listings from "./components/Listings"
import Details from "./components/Details"
import Login from "./components/Login"
import addListing from './components/addListing'
import './App.css'

// function checkAuth() {
//   const cookies = cookie.parse(document.cookie)
//   return cookies.isLoggedIn === 'true' ? true : false
// }

// function ProtectedRoute (props){
//   const {component: Component, ...rest} = props
//   return checkAuth() === true ? <Component{...rest}/> : <Navigate to="/Login"/>
// }

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
    <Navigation/>
    <Router/>
  </BrowserRouter>
  )
}

export default App
