// 例子 { a : string , b : number} => { a : string} | { b : number}
export type FieldUnion<T> = {
    [K in keyof T]: { [P in K]: T[K] };
}[keyof T];

// 例子 { a : string, b : number } => { a?: string, b?: number }
export type Optional<T> = {
    [P in keyof T]?: T[P];
};

// 简历的样式
export enum RESUME_STYLE {
    NORMAL = "normal",
}
