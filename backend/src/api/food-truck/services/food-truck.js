'use strict';

/**
 * food-truck service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-truck.food-truck');
