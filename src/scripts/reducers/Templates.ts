
import {AnyAction} from 'redux';
import immutable, {ImmutableObject} from 'seamless-immutable';
import {TEMPLATES_SET, TEMPLATES_PREVIEW_SET} from '../actions';


const initialState = immutable.from({
    templates: {},
    preview: null
});


export default (state: ImmutableObject<any> = initialState, action: AnyAction) => {
    switch (action.type) {
        case TEMPLATES_SET:
            return state.set('templates', action.me);

        case TEMPLATES_PREVIEW_SET:
            return state.set('preview', action.HTML);

        default:
            return state;
    }
};
