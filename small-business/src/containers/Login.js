import { connect } from "react-redux";
import Login from "../components/Login";
import { toggleLogin } from "../redux/actions";

const mapStateToProps = state => {
    return {
        user: state.user

    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLogin: status => dispatch(toggleLogin(status))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);