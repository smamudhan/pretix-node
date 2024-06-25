const HttpClient = require('../helpers/httpClient');

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
   */
  async getAll(organizer, event) {
    return this.client.get(`organizers/${organizer}/events/${event}/orders/`);
  }

  /**
   * Get a specific order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} code - The order code.
   * @returns {Promise<Object>} - The order data.
   */
  async get(organizer, event, code) {
    return this.client.get(`organizers/${organizer}/events/${event}/orders/${code}/`);
  }

  /**
   * Create a new order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {Object} data - The order data.
   * @returns {Promise<Object>} - The created order data.
   */
  async create(organizer, event, data) {
    return this.client.post(`organizers/${organizer}/events/${event}/orders/`, data);
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
    return this.client.patch(`organizers/${organizer}/events/${event}/orders/${code}/`, data);
  }

  /**
   * Delete an order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} code - The order code.
   * @returns {Promise<Object>} - The response data.
   */
  async delete(organizer, event, code) {
    return this.client.delete(`organizers/${organizer}/events/${event}/orders/${code}/`);
  }

  /**
   * Get tickets for an order.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} order - The order code.
   * @returns {Promise<Object>} - The tickets data.
   */
  async getTickets(organizer, event, order) {
    return this.client.get(`organizers/${organizer}/events/${event}/orders/${order}/positions/`);
  }
}

module.exports = Orders;
