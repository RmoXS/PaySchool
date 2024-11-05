import { Helmet } from "react-helmet"
import Login from "../../../components/Auth/Login"

const LoginAdmin = () => {
    return (
        <div>
            <Helmet>
                <title>Login Admin || PaySchool</title>
            </Helmet>
            <Login />
        </div>
    )
}

export default LoginAdmin