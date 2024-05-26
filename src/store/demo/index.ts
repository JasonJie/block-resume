import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { BasicInfoType } from "@/pages/resume/type";
import { FieldUnion } from "@/common/type";

interface BasicInfoStoreType {
    basicInfo: BasicInfoType;
    setBasicInfo: (basicInfoItem: FieldUnion<BasicInfoType>) => void;
}

export const useDemoStore = create<BasicInfoStoreType>()(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    immer((set) => ({
        basicInfo: {
            profession: "",
            name: "",
            work_place: "",
            phone: "",
            email: "",
            birthday: "",
            wechat: "",
        },
        setBasicInfo: (basicInfoItem: FieldUnion<BasicInfoType>) =>
            set((state) => {
                state.basicInfo = { ...state.basicInfo, ...basicInfoItem };
            }),
    }))
);
