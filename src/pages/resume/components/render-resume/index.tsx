import React, { useMemo } from "react";
import { RESUME_STYLE } from "@/common/type";
import { CommonResumePage } from "./components/index";

// 所有图标暂时使用
const RenderResume: React.FC = () => {
    const PAGE_STYLE = RESUME_STYLE.NORMAL;

    const switchPageStyle = useMemo(() => {
        switch (PAGE_STYLE) {
            case RESUME_STYLE.NORMAL:
                return <CommonResumePage />;
            default:
                return <CommonResumePage />;
        }
    }, [PAGE_STYLE]);

    return (
        <div className="p-5 bg-gray-100 min-h-screen-100">
            {switchPageStyle}
        </div>
    );
};

const RenderResumePage = React.memo(RenderResume);
export default RenderResumePage;
