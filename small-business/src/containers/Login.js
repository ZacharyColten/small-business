import { connect } from "react-redux";
import Login from "../components/Login";
import { toggleLogin } from "../redux/actions";

const mapStateToProps = state => {
    return {
        user: state.user,
        listings: state.listings

    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLogin: value => dispatch(toggleLogin(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);