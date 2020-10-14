import { Type, TemplateRef } from '@angular/core';

export class ModalAction {
    /** text to display on button */
    text: string;
    /** if true, the validity of modal content will be checked */
    primary?: boolean;
    constructor(text: string, primary: boolean) {
        this.text = text;
        this.primary = primary;
    }
}

export interface ModalOptions {
    /** modal title */
    title: string;
    /** the width pixel */
    width?: number;
    /** content of modal */
    content: {
        /** type of template */
        template: string | Type<any> | TemplateRef<any>;
        /** instance data in content */
        instData?: any;
    };
    /** button actions */
    actions?: ModalAction[];
}

export class ModalResult {
    action: ModalAction;
    data: any;
    constructor(action: ModalAction, data: any) {
        this.action = action;
        this.data = data;
    }
}
