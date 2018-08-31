import {html, LitElement} from '@polymer/lit-element';
import {property} from 'origami-zen/util/decorators';
import {connect} from 'pwa-helpers/connect-mixin';


export default class PageBase extends (connect(window.Origami.store)(LitElement)) {
    templates: { [name: string]: false | object } = {};

    @property
    fields: object[] = [];

    @property
    valuesPage: { [key: string]: any } = {};

    @property
    valuesTemplate: { [key: string]: any } = {};

    @property
    get values() {
        const values = JSON.parse(JSON.stringify(this.valuesPage));
        values.data = this.valuesTemplate;
        return values;
    }
    set values(v) {
        this.valuesPage = v;
        this.valuesTemplate = v.properties;
        delete this.valuesPage.properties;
    }

    get heading() { return this._heading; }
    set heading(v) {
        if (this._heading === v) return;
        this._heading = v;
        window.Origami.store.dispatch<any>(window.Origami.actions.App.titleSet(v));
    }
    _heading = '';

    @property
    get fieldsTemplate() {
        const clone = JSON.parse(JSON.stringify(this.templates[this.valuesPage.type] || {}));
        const properties = clone.properties || [];

        return [
            ...properties,
            {
                type: 'submit',
                icon: 'add',
                disabled: !Boolean(this.valuesPage.type),
                color: 'green'
            }
        ];
    }
    set fieldsTemplate(v) { }

    _stateChanged(s) {
        this.templates = s.Templates.templates.asMutable({deep: true});
    }

    _renderFormPage() {
        return html`
            <h4>Page settings</h4>
            <zen-form
                class="form-page"
                fields=${this.fields}
                values=${this.valuesPage}
                on-change=${this._handlePageValuesChange.bind(this)}
            ></zen-form>
        `;
    }

    _renderFormTemplate() {
        return html`
            ${Object.keys(this.fieldsTemplate).length > 1 ? html`<h4>Template settings</h4>` : null}
            <zen-form
                fields=${this.fieldsTemplate}
                values=${this.valuesTemplate}
                on-change=${this._handleTemplateValuesChange.bind(this)}
                on-submit=${this._handleSubmit.bind(this)}
            ></zen-form>
        `;
    }

    private _handlePageValuesChange(e: { target: { values: object } }) {
        this.valuesPage = e.target.values;
        this._handleChange();
    }

    private _handleTemplateValuesChange(e: { target: { values: object } }) {
        this.valuesTemplate = e.target.values;
        this._handleChange();
    }

    _handleChange() {}

    async _handleSubmit() {
        if (!this.shadowRoot.querySelector('zen-form.form-page').validate()) return;
        this.submit(this.values);
    }

    submit(values: object) {}
}
