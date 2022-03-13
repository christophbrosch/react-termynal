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
        autoScrole: boolean;
    };
    children?: any;
};
declare type TermynalLineProps = {
    type: "window" | "input" | "plain" | "progress";
    prompt?: string;
    children?: any;
};
declare type ContentType = {
    children: ReactNode;
    prompt?: string;
};
declare const Termynal: (props: TermynalProps) => JSX.Element;
declare const Line: ({ type, prompt, children }: TermynalLineProps) => JSX.Element;
declare const Input: ({ children, prompt }: ContentType) => JSX.Element;
declare const Plain: ({ children, prompt }: ContentType) => JSX.Element;
export { Termynal, Line, Input, Plain, };
