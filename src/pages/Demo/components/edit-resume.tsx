import React from "react";
import { Form, Row, Col, DatePicker } from "antd";
import AntdInput from "@/components/AntdInput";
import { FieldUnion } from "@/common/type";
import { useDemoStore } from "@/store";
import dayjs from "dayjs";

const LABEL_COL: number = 8;
const WRAPPER_COL: number = 16;

interface BasicInfoFormType {
    profession: string;
    work_place: string;
    name: string;
    phone: string;
    email: string;
    birthday: dayjs.Dayjs;
    wechat: string;
}

const EditResume: React.FC = () => {
    const [from] = Form.useForm();
    const { setBasicInfo } = useDemoStore((state) => ({
        setBasicInfo: state.setBasicInfo,
    }));

    const onValuesChange = (changedValues: FieldUnion<BasicInfoFormType>) => {
        // 判断 changedValues 中的key 是不是 birthday，如果是，则需要将其格式化为 dayjs 对象
        if ("birthday" in changedValues) {
            const { birthday } = changedValues;
            setBasicInfo({
                birthday: dayjs(birthday).format("YYYY-MM-DD"),
            });
            return;
        }
        setBasicInfo(changedValues);
    };
    return (
        <div className="p-5">
            <div className=" text-lg font-bold mb-3">基本信息</div>
            <div className="text-sm mb-5 text-slate-400">
                包含你的个人信息以及联系方式
            </div>
            <div>
                <Form
                    form={from}
                    labelCol={{ span: LABEL_COL }}
                    wrapperCol={{ span: WRAPPER_COL }}
                    onValuesChange={onValuesChange}>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                name="profession"
                                label="职业名称"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}>
                                <AntdInput />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="work_place"
                                label="工作地点"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}>
                                <AntdInput />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="姓名"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}>
                                <AntdInput />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="phone"
                                label="手机号码"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}>
                                <AntdInput />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="电子邮箱"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}>
                                <AntdInput />
                            </Form.Item>
                        </Col>
                        <Col span={12}></Col>
                        <Col span={12}>
                            <Form.Item
                                name="birthday"
                                label={"出生日期"}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}>
                                <DatePicker className="w-full" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="wechat"
                                label="微信号"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}>
                                <AntdInput />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

const EditResumePage = React.memo(EditResume);
export default EditResumePage;
