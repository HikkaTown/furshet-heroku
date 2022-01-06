'use strict';

/**
 * disinfection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::disinfection.disinfection');
