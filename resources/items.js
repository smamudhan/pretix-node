const HttpClient = require('../helpers/httpClient');

/**
 * Items class to interact with the Pretix Items API.
 */
class Items {
  /**
   * Creates an instance of Items.
   * @param {HttpClient} client - An instance of HttpClient.
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all items for an event.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @returns {Promise<Object>} - The items data.
   */
  async getAll(organizer, event) {
    return this.client.get(`organizers/${organizer}/events/${event}/items/`);
  }

  /**
   * Get a specific item.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} item - The item ID.
   * @returns {Promise<Object>} - The item data.
   */
  async get(organizer, event, item) {
    return this.client.get(`organizers/${organizer}/events/${event}/items/${item}/`);
  }

  /**
   * Create a new item.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {Object} data - The item data.
   * @returns {Promise<Object>} - The created item data.
   */
  async create(organizer, event, data) {
    return this.client.post(`organizers/${organizer}/events/${event}/items/`, data);
  }

  /**
   * Update an existing item.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} item - The item ID.
   * @param {Object} data - The updated item data.
   * @returns {Promise<Object>} - The updated item data.
   */
  async update(organizer, event, item, data) {
    return this.client.patch(`organizers/${organizer}/events/${event}/items/${item}/`, data);
  }

  /**
   * Delete an item.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} item - The item ID.
   * @returns {Promise<Object>} - The response data.
   */
  async delete(organizer, event, item) {
    return this.client.delete(`organizers/${organizer}/events/${event}/items/${item}/`);
  }
}

module.exports = Items;
