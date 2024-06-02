import { useState } from "react";
import { LoginForm, RegisterForm } from "./components";
import { LOGIN_TYPE } from "./type";

const Login: React.FC = () => {
    const [loginType, setLoginType] = useState<LOGIN_TYPE>(LOGIN_TYPE.LOGIN);

    const handleChangeLoginTypeChange = (type: LOGIN_TYPE) => {
        setLoginType(type);
    };

    return (
        <div className="bg-login-bg h-screen bg-cover flex">
            <div className="m-auto flex items-center justify-center">
                <div className="w-112 rounded-lg flex flex-col p-6 pt-10 backdrop-filter backdrop-blur-lg">
                    {loginType === LOGIN_TYPE.LOGIN && (
                        <LoginForm
                            changeLoginType={handleChangeLoginTypeChange}
                        />
                    )}
                    {loginType === LOGIN_TYPE.REGISTER && (
                        <RegisterForm
                            changeLoginType={handleChangeLoginTypeChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
