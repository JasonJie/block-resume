import React, { useEffect } from "react";
import { useRequest } from "ahooks";
import resumeApi from "@/api/resume";
import EditResumePage from "@/pages/resume/components/edit-resume";
import RenderResumePage from "@/pages/resume/components/render-resume";

import CustomDraftEditor from "@/components/CustomDraftEditor";


const Resume = () => {
    const resumes = useRequest(resumeApi.getResumes, {
        manual: true,
    });

    useEffect(() => {
        console.log(resumes.data);
    }, [resumes.data]);

    useEffect(() => {
        resumes.run(1);
    }, []);
    return (
        <div className=" flex">
            {/* <div className="flex-1">
                <EditResumePage />
            </div>
            <div className="flex-1">
                <RenderResumePage />
            </div> */}

            <CustomDraftEditor />
        </div>
    );
};
const ResumePage = React.memo(Resume);

export default ResumePage;
