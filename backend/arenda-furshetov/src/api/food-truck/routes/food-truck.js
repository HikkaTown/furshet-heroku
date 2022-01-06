'use strict';

/**
 * food-truck router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::food-truck.food-truck');
