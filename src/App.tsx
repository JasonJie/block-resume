import { ConfigProvider } from "antd";
import Demo from "@/pages/Demo";

import zhCN from "antd/locale/zh_CN";

const App = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <Demo />
        </ConfigProvider>
    );
};

export default App;
