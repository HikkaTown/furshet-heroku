'use strict';

/**
 * master-class router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::master-class.master-class');
