import { useState } from "react";
import { LoginForm, RegisterForm } from "./components";
import { LOGIN_TYPE } from "./type";
import LoginBg from "@/assets/login-bg.jpg";

const Login: React.FC = () => {
    const [loginType, setLoginType] = useState<LOGIN_TYPE>(LOGIN_TYPE.LOGIN);

    const handleChangeLoginTypeChange = (type: LOGIN_TYPE) => {
        setLoginType(type);
    };

    return (
        <div className="flex flex-row">
            <img
                src={LoginBg}
                alt="login-bg"
                className="object-cover flex-1 w-screen-50 h-screen"
            />
            <div className="flex-1 w-screen-50 bg-stone-50 flex items-center justify-center">
                <div className="w-112 bg-white rounded-lg flex flex-col p-6 pt-10">
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
