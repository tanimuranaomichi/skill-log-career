import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
const PrivateRoute = ({ component, exact, path }) => {
    const { user } = useAuthContext();
    if (user) {
        return <Route exact={exact} path={path} component={component} />;
    } else {
        return <Redirect to="/login" />;
    }
};

export default PrivateRoute;