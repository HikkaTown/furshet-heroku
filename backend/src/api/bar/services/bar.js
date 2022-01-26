'use strict';

/**
 * bar service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bar.bar');
