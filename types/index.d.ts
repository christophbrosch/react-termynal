import { ReactNode } from "react";
import "./termynal.css";
declare type TermynalProps = {
    id: string;
    options?: {
        startDelay: number;
        typeDelay: number;
        lineDelay: number;
        progressLength: number;
        progressChard: string;
        progressPercent: number;
        cursor: ReactNode;
    };
    children?: any;
};
export declare const Termynal: (props: TermynalProps) => JSX.Element;
export {};
