import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listing from './containers/Listing'
import LoggedInListing from './containers/LoggedInListing'
import Details from './containers/Details'
import Login from './containers/Login'
import AddListing from './containers/AddListing'
import { connect } from 'react-redux'

class Router extends React.Component {
    render = () => {
        const ProtectedRoute = ({ component: Component, ...rest }) => {
            return (
                <Route
                    {...rest}
                    render={(props) => this.props.user.loggedIn
                        ? <Component {...props} />
                        : <Redirect to="/login" />}
                />
            )
        }

        return (
            <Switch>
                <Route exact path="/" component={this.props.user.loggedIn ? Listing : Login} />
                <Route path="/login" component={Login} />
                <Route path="/details/:id" component={Details} />
                <ProtectedRoute path="/listing" component={LoggedInListing} />
                <ProtectedRoute path="/addlisting" component={AddListing} /> />
            </Switch>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Router)