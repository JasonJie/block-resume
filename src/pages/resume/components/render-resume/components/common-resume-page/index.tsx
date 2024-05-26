import React from "react";
import { BasicInfoPage } from "./components";

const CommonResume: React.FC = () => {
    return (
        <div>
            <BasicInfoPage />
        </div>
    );
};

const CommonResumePage = React.memo(CommonResume);
export default CommonResumePage;
