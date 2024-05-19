import React from "react";
import { useRequest } from "ahooks";
import demoApi from "@/api/demo";
import EditResumePage from "@/pages/Demo/components/edit-resume";
import RenderResumePage from "@/pages/Demo/components/render-resume";

const Demo = () => {
    const { data } = useRequest(demoApi.getDemo);

    console.log(data);

    return (
        <div className=" flex">
            <div className="flex-1">
                <EditResumePage />
            </div>
            <div className="flex-1">
                <RenderResumePage />
            </div>
        </div>
    );
};
const DemoPage = React.memo(Demo);

export default DemoPage;
