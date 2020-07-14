import express from 'express'; // const express = require('express');

const app = express();

app.init = function init() {
  initMiddleware(app);
};

function initMiddleware(app) {
  app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
  });
}

export default app; // exports.default = app;
//# sourceMappingURL=app.js.map