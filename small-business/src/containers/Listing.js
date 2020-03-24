import { connect } from 'react-redux'
import Listing from '../components/Listing'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}

export default connect(mapStateToProps)(Listing)