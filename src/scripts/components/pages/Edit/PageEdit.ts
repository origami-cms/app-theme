import Base from '../PageBase';
import pageActions from 'actions/Pages';
import {getPreview} from 'actions/Templates';
import {component, property} from 'origami-zen/util/decorators';
import {html} from '@polymer/lit-element';
import CSS from './page-edit-css';
import {Tab} from 'origami-zen/components/Tabs/Tabs';

@component('app-theme-page-edit')
export default class PageEdit extends Base {
    heading = 'Edit page';
    tabs: Tab[] = [
        {icon: 'page'},
        {icon: 'brush'}
    ];

    @property
    preview?: string;

    private _requestingPreview: boolean = false;

    get fieldsTemplate() {
        const fieldsSuper = super.fieldsTemplate;
        const submit = fieldsSuper.slice(-1)[0];
        submit.value = 'Save page';
        submit.icon = 'tick';

        return fieldsSuper;
    }

    get _resID() {
        return window.location.pathname.split('/').pop();
    }

    connectedCallback() {
        super.connectedCallback();
        window.Origami.store.dispatch<any>(pageActions.pagesGet(this._resID));
    }

    _stateChanged(s) {
        super._stateChanged(s);


        const page = s.resources.pages.pages.find(p => p.id === this._resID);
        if (page && !this._requestingPreview) {
            if (page.data) {
                this.valuesTemplate = page.data.asMutable({deep: true});
                delete this.valuesPage.data;
            }
            this.valuesPage = page.asMutable({deep: true});
            this.heading = `Edit page '${page.title}'`;

        }

        if (s.Templates.preview) this.preview = s.Templates.preview;
    }

    _render({preview}: any) {
        return html`
            ${CSS}
            ${preview ? html`<ui-browser-preview content=${preview} url=${this.valuesPage.url}></ui-browser-preview>` : null}
            <div class="card">
                <zen-tabs tabs=${this.tabs} noexpand>
                    <div>${this._renderFormPage()}</div>
                    <div>${this._renderFormTemplate()}</div>
                </zen-tabs>
                <footer>
                    <span>
                        <zen-button hollow color="grey-300">Save draft</zen-button>
                    </span>
                    <span>
                        <zen-button color="green">Publish</zen-button>
                    </span>
                </footer>
            </div>
        `;
    }

    async _handleChange() {
        if (this._requestingPreview) return false;
        this._requestingPreview = true;
        const values = this.values;
        await window.Origami.store.dispatch<any>(getPreview(values.type, values.data));
        this.shadowRoot!.querySelector('ui-browser-preview').content = this.preview;
        this._requestingPreview = false;
    }

    async submit(values: object) {
        return await window.Origami.store.dispatch<any>(pageActions.pagesUpdate(this._resID, values));
    }

}
