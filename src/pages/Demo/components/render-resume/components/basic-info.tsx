import React from "react";

const BasicInfo: React.FC = () => {
    return (
        <div>
            <div>basic info</div>
        </div>
    );
};

const BasicInfoCmp = React.memo(BasicInfo);

export default BasicInfoCmp;
