import React from "react"
import {Routes, Route, Navigate} from "react-router"
import Home from "./components/home"
import Listings from "./containers/Listings"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Details from "./components/Details"
import addListing from "./components/addListing"
import cookie from "cookie"


function checkAuth () {
    let cookies = cookie.parse(document.cookie)
    return cookies["isLoggedIn"] ? true : false
}

//lets a user access the protected routes only if logged in
function ProtectedRoute (props) {
    const {component: Component, ...rest} = props
    return checkAuth() === true ? <Component {...rest}/> :  <Navigate to="/Login"/>
}
const Router = () => {
    return (
        <Routes>
            {/* protected routes only work once user is logged in */}
            {/* <Route path="/" element={<ProtectedRoute component={Listings}/>} /> */}
            <Route path="/" element={ <Listings/>} />

            {/* <Route path="/login" component={<Login/>} />
            <Route path="/listings" component={Dashboard} />
            <Route path="/listings/:id" component={Details} />
            <Route path="/addListings" element={<ProtectedRoute component={addListing}/>}/> */}
        </Routes>
    )
}

export default Router;