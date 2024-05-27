import React from "react";
import { CustomDraftEditor } from "@/components";

const workExperience: React.FC = () => {
    return (
        <>
            <CustomDraftEditor />
        </>
    );
};
const workExperiencePage = React.memo(workExperience);
export default workExperiencePage;
