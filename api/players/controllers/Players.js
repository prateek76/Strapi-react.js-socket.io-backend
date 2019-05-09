'use strict';

/**
 * Players.js controller
 *
 * @description: A set of functions called "actions" for managing `Players`.
 */

module.exports = {

  /**
   * Retrieve players records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.players.search(ctx.query);
    } else {
      return strapi.services.players.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a players record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.players.fetch(ctx.params);
  },

  /**
   * Count players records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.players.count(ctx.query, populate);
  },

  /**
   * Create a/an players record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.players.add(ctx.request.body);
    // Send 201 `created`
    ctx.created(data);
    // NEW LINE: call our method emitToAllUsers and pass it body request
    strapi.emitToAllUsers(ctx.request.body);
  },

  /**
   * Update a/an players record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.players.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an players record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.players.remove(ctx.params);
  }
};
