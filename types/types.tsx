import { ReactNode, MouseEvent, ChangeEvent } from "react";

export type LayoutProps = {
    children: ReactNode;
};

export type adminSlug = {
    slug : string | undefined | string[]
};

export type NavLink = {
    title: string;
    link: string;
};

export type InputTitle = {
    label: string;
    required: boolean;
    className?: string;
    bgColor?:string;
}

export type NormalButton = {
    className?: string;
    disabled: boolean;
    variant?: string;
    bgColor?: string;
    children: ReactNode;
    type? : "button" | "submit" | "reset";
    restProps?: any; 
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export type ErrorMessage = {
   error : {
    message?:string
   }
}

export type NormalInputProps = {
    label?: string;
    type: string;
    name: string;
    rules?: any; 
    value?: any;
    placeholder? : string;
    className?: string;
    fieldArrayName?: string;
    required?: boolean;
    helperIcon?: boolean;
    icon?:boolean;
    isIconClick?: (event: MouseEvent<HTMLDivElement>) => void | undefined
    restProps?: any; 
}

export type NormalCheckboxProps = {
    type: string;
    name: string;
    rules?: any; 
    value?: any;
    placeholder? : string;
    className?: string;
    fieldArrayName?: string;
    title?: string;
    onChange:(event : ChangeEvent<HTMLInputElement>) => void
    restProps?: any; 
    defaultBtn?: boolean;
}

export type NormalTextAreaProps = {
    label?: string;
    name: string;
    type?: string;
    rules?: any; 
    value?: any;
    required?: boolean;
    placeholder? : string;
    className?: string;
    fieldArrayName?: string;
    title?: string;
    onChange:(event : ChangeEvent<HTMLInputElement>) => void
    restProps?: any; 
}

export type ModalPopupProps = LayoutProps & {
    show: boolean;
    title: string;
    buttonTitle: string;
    handleClose : (event: MouseEvent<HTMLButtonElement>) => void
    handleYes: (event: MouseEvent<HTMLButtonElement>) => void
}

export type RadioCardProps = LayoutProps & {
   bgColor: string;
   className: string;
}

export type HelpFormProps =  {
    className: string;
 }