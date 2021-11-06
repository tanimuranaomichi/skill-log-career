import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
const PrivateRoute = ({ component, exact, path }) => {
    const { user } = useAuthContext();
    console.log(user);
    if (user) {
        console.log("成功");
        return <Route exact={exact} path={path} component={component} />;
    } else {
        console.log(user);
        return <Redirect to="/login" />;
    }
};

export default PrivateRoute;