import {statSync} from 'fs';
import {Renderer, resolveLib} from 'origami-core-lib';
import Server from 'origami-core-server';
import path from 'path';

// Render sass/less/etc files from the theme's styles directory
import cssRouter from './content/css';
// Render pages in the theme/pages directory
import pagesRouter from './content/pages';

// Render the templates in the theme/templates directory, and
import templateRouter from './theme/templates';

// Render the templates in the theme/templates directory, and
import previewRouter from './theme/preview';


const renderer = new Renderer();


module.exports = async (app: Server, theme: string) => {
    // const themeConfig = await requireLib(`${theme}/theme.js`, process.cwd(), 'theme');
    let themePath = await resolveLib(theme, process.cwd(), 'origami-theme-');
    if (statSync(themePath).isFile()) themePath = path.dirname(themePath);

    [
        cssRouter,
        pagesRouter,
        templateRouter,
        previewRouter
    ].forEach(r => r(app, themePath, renderer));


    // Setup the static files from the 'public' folder
    app.static(path.resolve(themePath, 'public'));


};
