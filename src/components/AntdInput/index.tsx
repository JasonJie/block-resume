import React, { useCallback, useState } from "react";
import { Input, InputProps } from "antd";

interface AntdInputProps
    extends Omit<InputProps, "onCompositionStart" | "onCompositionEnd"> {}

const AntdInput = (props: AntdInputProps) => {
    const [isComposing, setIsComposing] = useState(false);
    const [inputValue, setInputValue] = useState(props.value);

    const handleCompositionStart = useCallback(() => {
        setIsComposing(true);
    }, []);
    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>, manualTrigger = false) => {
            setInputValue(event.target.value);
            if (!isComposing || manualTrigger) {
                props.onChange && props.onChange(event);
            }
        },
        [isComposing, props]
    );
    const handleCompositionEnd = useCallback(
        (event: React.CompositionEvent<HTMLInputElement>) => {
            setIsComposing(false);

            // 当中文输入完成后，手动触发一次 onChange 事件
            // 创建一个新的 ChangeEvent 对象并手动触发 onChange
            const newEvent = {
                ...event,
                target: event.target as HTMLInputElement,
                currentTarget: event.currentTarget as HTMLInputElement,
                // 这里我们将 type 明确为 "change"
                type: "change",
                nativeEvent: event.nativeEvent,
            } as React.ChangeEvent<HTMLInputElement>;
            handleChange(newEvent, true);
        },
        [handleChange]
    );

    return (
        <Input
            {...props}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            onChange={handleChange}
            value={inputValue}
        />
    );
};

const AntdInputCmp = React.memo(AntdInput);

export default AntdInputCmp;
