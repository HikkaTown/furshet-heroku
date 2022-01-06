'use strict';

/**
 * bar-counter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bar-counter.bar-counter');
