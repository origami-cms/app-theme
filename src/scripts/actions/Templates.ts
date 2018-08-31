import {Dispatch} from 'redux';
export const TEMPLATES_SET = 'TEMPLATES_SET';
export const TEMPLATES_PREVIEW_SET = 'TEMPLATES_PREVIEW_SET';

export const getTemplates = () =>
    async (dispatch: Dispatch) => {
        const {data: me} = await window.Origami.api.get('/theme/templates');
        dispatch({type: TEMPLATES_SET, me});
    };

export const getPreview = (template: string, data: object) =>
    async (dispatch: Dispatch) => {
        const HTML = await window.Origami.api.post(`/theme/preview/${template}`, data, false, 'text');
        dispatch({type: TEMPLATES_PREVIEW_SET, HTML});
        return HTML;
    };
