const HttpClient = require("../helpers/httpClient");

/**
 * Orders class to interact with the Pretix Orders API.
 */
class Orders {
  /**
   * Creates an instance of Orders.
   * @param {HttpClient} client - An instance of HttpClient.
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all orders for an event.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @returns {Promise<Object>} - The orders data.
   * @param {Object} [params={}] - The query parameters.
   * @todo Add Response Headers
   * @see {@link https://docs.pretix.eu/en/latest/api/resources/orders.html#get--api-v1-organizers-(organizer)-events-(event)-orders-}
   */
  async getAll(organizer, event, params = {}) {
    return this.client.get(
      `organizers/${organizer}/events/${event}/orders/`,
      params
    );
  }

  /**
   * Get a specific order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} code - The order code.
   * @param {Object} [params={}] - The query parameters.
   * @returns {Promise<Object>} - The order data.
   */
  async get(organizer, event, code, params = {}) {
    return this.client.get(
      `organizers/${organizer}/events/${event}/orders/${code}/`,
      params
    );
  }

  /**
   * Download tickets for an order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} code - The order code.
   * @param {string} output - The internal name of the output provider to use. Defaults to PDF.
   * @returns {Promise<Object>} - The ticket file data.
   */
  async get(organizer, event, code, output = "pdf") {
    return this.client.get(
      `organizers/${organizer}/events/${event}/orders/${code}/download/${output}/`
    );
  }

  /**
   * Create a new order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {Object} data - The order data.
   * @returns {Promise<Object>} - The created order data.
   */
  async create(organizer, event, data) {
    return this.client.post(
      `organizers/${organizer}/events/${event}/orders/`,
      data
    );
  }

  /**
   * Update an existing order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} code - The order code.
   * @param {Object} data - The updated order data.
   * @returns {Promise<Object>} - The updated order data.
   */
  async update(organizer, event, code, data) {
    return this.client.patch(
      `organizers/${organizer}/events/${event}/orders/${code}/`,
      data
    );
  }

  /**
   * Delete an order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} code - The order code.
   * @returns {Promise<Object>} - The response data.
   */
  async delete(organizer, event, code) {
    return this.client.delete(
      `organizers/${organizer}/events/${event}/orders/${code}/`
    );
  }

  /**
   * Get tickets information for an order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} order - The order code.
   * @returns {Promise<Object>} - The tickets data.
   * @todo determine if needed
   */
  async getTickets(organizer, event, order) {
    return this.client.get(
      `organizers/${organizer}/events/${event}/orders/${order}/positions/`
    );
  }

  /**
   * Mark a pending or expired order as successfully paid.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} code - The order code.
   * @returns {Promise<Object>} - The updated order data.
   */
  async markAsPaid(organizer, event, code) {
    return this.client.post(
      `organizers/${organizer}/events/${event}/orders/${code}/mark_paid/`
    );
  }
}

module.exports = Orders;
