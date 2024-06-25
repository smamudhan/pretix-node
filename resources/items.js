const HttpClient = require("../helpers/httpClient");

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
   * @param {Object} [params={}] - The query parameters.
   * @returns {Promise<Object>} - The items data.
   */
  async getAll(organizer, event, params = {}) {
    return this.client.get(
      `organizers/${organizer}/events/${event}/items/`,
      params
    );
  }

  /**
   * Get a specific item.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} item - The item ID.
   * @returns {Promise<Object>} - The item data.
   */
  async get(organizer, event, item) {
    return this.client.get(
      `organizers/${organizer}/events/${event}/items/${item}/`
    );
  }

  /**
   * Create a new item.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {Object} data - The item data.
   * @param {Object} [params={}] - The query parameters.
   * @returns {Promise<Object>} - The created item data.
   */
  async create(organizer, event, data, params = {}) {
    return this.client.post(
      `organizers/${organizer}/events/${event}/items/`,
      data,
      params
    );
  }

  /**
   * Update an existing item.
   * You can change all fields of the resource except the `has_variations`, `variations` and the `addon` fields.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} item - The item ID.
   * @param {Object} data - The item data to update.
   * @returns {Promise<Object>} - The updated item data.
   * @todo: Add checks for unsupported fields, or add logic to make multiple requests to appropriate endpoints.
   * @see {@link https://docs.pretix.eu/en/latest/api/resources/items.html#notes}
   * @see {@link https://docs.pretix.eu/en/latest/api/resources/items.html#patch--api-v1-organizers-(organizer)-events-(event)-items-(id)-}
   */
  async update(organizer, event, item, data) {
    return this.client.patch(
      `organizers/${organizer}/events/${event}/items/${item}/`,
      data
    );
  }

  /**
   * Delete an item.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {string} item - The item ID.
   * @returns {Promise<Object>} - The response data.
   */
  async delete(organizer, event, item) {
    return this.client.delete(
      `organizers/${organizer}/events/${event}/items/${item}/`
    );
  }
}

module.exports = Items;
