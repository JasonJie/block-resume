import { Form, Input, Button, Space } from "antd";
import { LOGIN_TYPE } from "../type";
import { useCallback } from "react";
import React from "react";

interface LoginFormProps {
    changeLoginType: (type: LOGIN_TYPE) => void;
}

const RegisterForm: React.FC<LoginFormProps> = ({ changeLoginType }) => {
    const [form] = Form.useForm();

    const handleChangeLoginType = useCallback(() => {
        changeLoginType(LOGIN_TYPE.LOGIN);
    }, [changeLoginType]);
    return (
        <>
            <div className="text-3xl font-normal text-center mb-6">注册</div>
            <Form form={form}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: "请输入用户名！" }]}>
                    <Input
                        placeholder="用户名"
                        size="large"
                        prefix={<i className="ri-user-line text-lg" />}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "请输入密码！" }]}>
                    <Input.Password
                        placeholder="密码"
                        size="large"
                        prefix={<i className="ri-lock-line text-lg" />}
                    />
                </Form.Item>
                <Form.Item className="flex justify-end">
                    <Space>
                        <Button
                            type="primary"
                            size="large"
                            htmlType="submit"
                            className="w-full">
                            注册
                        </Button>
                        <Button
                            type="link"
                            size="large"
                            className="w-full"
                            onClick={handleChangeLoginType}>
                            返回
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    );
};
const RegisterFormPage = React.memo(RegisterForm);
export default RegisterFormPage;
