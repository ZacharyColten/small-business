import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listing from './containers/Listing'
import LoggedInListing from './containers/LoggedInListing'
import Details from './containers/Details'
import Login from './components/Login'
import AddListing from './containers/AddListing'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    // Check the cookies for a cookie called "loggedIn"
    return cookies["loggedIn"] ? true : false
}



const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => checkAuth()
                ? <Component {...props} />
                : <Redirect to="/login" />}
        />
    )
}


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/login" component={Login} />
            <Route path="/details/:id" component={Details} />
            <ProtectedRoute path="/listing" component={LoggedInListing} />
            <ProtectedRoute path="/addlisting" component={AddListing} /> />
        </Switch>
    );
};

export default Router;