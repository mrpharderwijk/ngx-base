/**
 * This file sets up a simple server to be run and serve the distribution
 * version of this app. This file can be run by `npm start` and is needed
 * in a Heroku environment. Heroku will kick off a `npm install` which will,
 * in its turn, do a `postinstall` which will normally do an `ng build --aot --prod`.
 *
 * After the `postinstall` Heroku will do a `npm start` which will run this script.
 */
const express = require('express');
const path = require('path');
const pkg = require('./package.json');
const app = express();

/**
 * Serve only the static files form the dist directory
 * !!IMPORTANT!!
 * Make sure the dist directory is the same as the `angular.json` describes
 */
app.use(express.static(`${__dirname}/dist/${pkg.name}`));

/**
 * Redirect all urls to the index.html
 * !!IMPORTANT!!
 * Make sure the dist directory is the same as the `angular.json` describes
 */
app.get('/*', function(req, res) {
  res.sendFile(path.join(`${__dirname}/dist/${pkg.name}/index.html`));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
