import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from "./redux/store"
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import Router from "./Router"
import cookie from "cookie"

// function checkAuth() {
//   const cookies = cookie.parse(document.cookie)
//   return cookies.isLoggedIn === 'true' ? true : false
// }

// function ProtectedRoute (props){
//   const {component: Component, ...rest} = props
//   return checkAuth() === true ? <Component{...rest}/> : <Navigate to="/Login"/>
// }

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect(() => {
  //   const loginStatus = checkAuth()
  //   setIsLoggedIn(loginStatus)
  // },[isLoggedIn, setIsLoggedIn])

  return (
    <Provider store ={store}>
      <BrowserRouter>
        <Navigation/>
        <Router/>
      </BrowserRouter>
    </Provider>
      
  )
}

export default App
