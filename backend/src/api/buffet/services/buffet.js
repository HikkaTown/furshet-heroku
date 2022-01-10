'use strict';

/**
 * buffet service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buffet.buffet');
