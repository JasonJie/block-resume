import React from "react";
import {
    WechatFilled,
    EnvironmentFilled,
    MailFilled,
    PhoneFilled,
    BulbFilled,
} from "@ant-design/icons";
import { useDemoStore } from "@/store";

// 所有图标暂时使用
const RenderResume: React.FC = () => {
    const { basicInfo } = useDemoStore((state) => ({
        basicInfo: state.basicInfo,
    }));
    return (
        <div className="p-5">
            <div className="text-center mb-5">
                <span className=" text-xl font-bold mr-2">
                    {basicInfo.name}
                </span>
                <span className=" text-sm ">{basicInfo.profession}</span>
            </div>
            <div className=" mb-5 flex justify-center">
                <div className="ml-2">
                    <EnvironmentFilled height={12} width={12} />
                    <span className="ml-2 text-xs">{basicInfo.work_place}</span>
                </div>
                <div className="ml-2">
                    <MailFilled height={12} width={12} />
                    <span className="ml-2 text-xs">{basicInfo.email}</span>
                </div>
                <div className="ml-2">
                    <PhoneFilled height={12} width={12} />
                    <span className="ml-2 text-xs">{basicInfo.phone}</span>
                </div>
                <div className="ml-2">
                    <WechatFilled height={12} width={12} />
                    <span className="ml-2 text-xs">{basicInfo.wechat}</span>
                </div>
                <div className="ml-2">
                    <BulbFilled height={12} width={12} />
                    <span className="ml-2 text-xs">{basicInfo.birthday}</span>
                </div>
            </div>
        </div>
    );
};

const RenderResumePage = React.memo(RenderResume);
export default RenderResumePage;
