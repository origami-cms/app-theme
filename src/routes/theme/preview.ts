import {renderTemplate} from '../lib/renderingMW';
import {Renderer, Route} from 'origami-core-lib';
import Server from 'origami-core-server';

module.exports = (app: Server, themePath: string, renderer: Renderer) => {

    // Generate a preview of the page
    const r = new Route('/api/v1/theme/preview/:template')
        .use('auth')
        .position('store')
        .post((req, res, next) => {
            // Assign the body's data to the response data for the template
            res.data = {
                type: req.params.template,
                data: req.body
            };
            next();
        })
        .position('render')
        .post(renderTemplate(themePath, renderer));

    app.useRouter(r);
};

