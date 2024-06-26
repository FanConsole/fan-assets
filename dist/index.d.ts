declare module "icon-urls/filled" {
    export const caretDownFilled: string;
    export const closeFilled: string;
    export const locationCircleFilled: string;
}
declare module "icon-urls/linear" {
    export const calendarItalic: string;
    export const checkCircleOpen: string;
    export const close: string;
    export const search: string;
    export const trashBin: string;
}
declare module "icon-urls/index" {
    export * from "icon-urls/filled";
    export * from "icon-urls/linear";
}
declare module "image-urls/default" {
    export const imgEleme: string;
    export const imgEmptyBox: string;
}
declare module "image-urls/index" {
    export * from "image-urls/default";
}
declare module "fan-assets" {
    export * from "icon-urls/index";
    export * from "image-urls/index";
}
