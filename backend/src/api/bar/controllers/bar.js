'use strict';

/**
 *  bar controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bar.bar');
