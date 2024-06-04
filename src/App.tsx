import { ConfigProvider } from "antd";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import rootRouter from "@/router";

import zhCN from "antd/locale/zh_CN";

const App = () => {
    const router = createBrowserRouter(rootRouter);
    return (
        <ConfigProvider locale={zhCN}>
            <RouterProvider router={router} />
        </ConfigProvider>
    );
};


export default App;
