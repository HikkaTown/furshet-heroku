'use strict';

/**
 *  bar-counter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bar-counter.bar-counter');
