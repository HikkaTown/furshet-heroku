'use strict';

/**
 * exit-bar service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exit-bar.exit-bar');
