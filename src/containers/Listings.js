import {connect} from "react-redux"
import Listings from "../components/Listings"

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Car)
