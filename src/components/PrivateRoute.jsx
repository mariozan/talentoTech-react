import { Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = ({ Component }) => {

    const isAutheticated = useSelector(state => state.auth.isAutheticated)

    return isAutheticated ? <Component /> : <Navigate to="/login"/>

}

export default PrivateRoute