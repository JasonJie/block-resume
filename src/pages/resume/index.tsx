import React from "react";
import { useRequest } from "ahooks";
import demoApi from "@/api/demo";
import EditResumePage from "@/pages/resume/components/edit-resume";
import RenderResumePage from "@/pages/resume/components/render-resume";
const Resume = () => {
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
const ResumePage = React.memo(Resume);

export default ResumePage;
