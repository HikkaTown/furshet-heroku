'use strict';

/**
 * master-class service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::master-class.master-class');
