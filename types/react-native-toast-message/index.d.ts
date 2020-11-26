import { Component, ReactNode } from "react";

declare module "react-native-toast-message" {
    export default class Toast extends Component {
        _ref: any;

        static setRef(ref: any): void;
        static getRef(ref: any): any;
        static clearRef(ref: any): void;
        static show(opt: any): void;
        static hide(opt: any): void;
    }
}