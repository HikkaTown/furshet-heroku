'use strict';

/**
 * bar-counter router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bar-counter.bar-counter');
