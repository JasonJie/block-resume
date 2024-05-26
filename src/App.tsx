import { ConfigProvider } from "antd";
import ResumePage from "@/pages/resume";

import zhCN from "antd/locale/zh_CN";

const App = () => {
    return (
        <ConfigProvider locale={zhCN}>
            <ResumePage />
        </ConfigProvider>
    );
};

export default App;
