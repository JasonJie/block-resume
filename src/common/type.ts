export type FieldUnion<T> = {
    [K in keyof T]: { [P in K]: T[K] };
}[keyof T];
