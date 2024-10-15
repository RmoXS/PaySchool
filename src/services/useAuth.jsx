import { Navigate } from "react-router-dom"
import jwtDecode from "jwt-decode"

const useAuth = ({ element: Component }) => {
 const token = localStorage.getItem('token');

 if (!token) {
    return <Navigate to="/login" />
 }

 try {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        return <Navigate to="/login" />
    }
    
    return <Component />
 } catch (error) {
    console.error('Invalid token:', error);
    localStorage.removeItem('token');
    return <Navigate to="/login" />
 }
};

export default useAuth