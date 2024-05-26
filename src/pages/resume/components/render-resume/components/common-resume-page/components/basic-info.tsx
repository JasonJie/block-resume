import React from "react";
import {
    WechatFilled,
    EnvironmentFilled,
    MailFilled,
    PhoneFilled,
    BulbFilled,
} from "@ant-design/icons";
import { useDemoStore } from "@/store";

const BasicInfo: React.FC = () => {
    const { basicInfo } = useDemoStore((state) => ({
        basicInfo: state.basicInfo,
    }));

    return (
        <div>
            <div className="text-center mb-5">
                <span className=" text-xl font-bold mr-2">
                    {basicInfo.name}
                </span>
                <span className=" text-sm ">{basicInfo.profession}</span>
            </div>
            <div className="mb-5 flex justify-center">
                {basicInfo.work_place && (
                    <div className="ml-2">
                        <EnvironmentFilled height={12} width={12} />
                        <span className="ml-2 text-xs">
                            {basicInfo.work_place}
                        </span>
                    </div>
                )}
                {basicInfo.email && (
                    <div className="ml-2">
                        <MailFilled height={12} width={12} />
                        <span className="ml-2 text-xs">{basicInfo.email}</span>
                    </div>
                )}
                {basicInfo.phone && (
                    <div className="ml-2">
                        <PhoneFilled height={12} width={12} />
                        <span className="ml-2 text-xs">{basicInfo.phone}</span>
                    </div>
                )}
                {basicInfo.wechat && (
                    <div className="ml-2">
                        <WechatFilled height={12} width={12} />
                        <span className="ml-2 text-xs">{basicInfo.wechat}</span>
                    </div>
                )}
                {basicInfo.birthday && (
                    <div className="ml-2">
                        <BulbFilled height={12} width={12} />
                        <span className="ml-2 text-xs">
                            {basicInfo.birthday}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

const BasicInfoPage = React.memo(BasicInfo);
export default BasicInfoPage;
