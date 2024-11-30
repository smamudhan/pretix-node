const HttpClient = require("../helpers/httpClient");
const Items = require("./items");

/**
 * Events class to interact with the Pretix Events API.
 */
class Events {
  /**
   * Creates an instance of Events.
   * @param {HttpClient} client - An instance of HttpClient.
   */
  constructor(client) {
    this.client = client;
    this.items = new Items(client);
  }

  /**
   * Get all events for an organizer.
   * @param {string} organizer - The organizer's slug.
   * @param {Object} [params={}] - The query parameters.
   * @returns {Promise<Object>} - The events data.
   */
  async getAll(organizer, params = {}) {
    return this.client.get(`organizers/${organizer}/events/`, params);
  }

  /**
   * Get a specific event.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @returns {Promise<Object>} - The event data.
   */
  async get(organizer, event) {
    return this.client.get(`organizers/${organizer}/events/${event}/`);
  }

  /**
   * Create a new event.
   * @param {string} organizer - The organizer's slug.
   * @param {Object} data - The event data.
   * @param {Object} [params={}] - The query parameters.
   * @returns {Promise<Object>} - The created event data.
   */
  async create(organizer, data, params = {}) {
    return this.client.post(`organizers/${organizer}/events/`, data, params);
  }

  /**
   * Clone event with properties as set in the request body.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event slug to copy settings and items from.
   * @param {Object} data - The event data.
   * @param {Object} [params={}] - The query parameters.
   * @returns {Promise<Object>} - The created event data.
   * @see {@link https://docs.pretix.eu/en/latest/api/resources/events.html#post--api-v1-organizers-(organizer)-events-(event)-clone-}
   */
  async create(organizer, event, data, params = {}) {
    return this.client.post(
      `organizers/${organizer}/events/${event}/clone`,
      data,
      params
    );
  }

  /**
   * Update an existing event.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @param {Object} data - The event data to be updated.
   * @returns {Promise<Object>} - The updated event data.
   */
  async update(organizer, event, data) {
    return this.client.patch(`organizers/${organizer}/events/${event}/`, data);
  }

  /**
   * Delete an event.
   * @param {string} organizer - The organizer's slug.
   * @param {string} event - The event's slug.
   * @returns {Promise<Object>} - The response data.
   */
  async delete(organizer, event) {
    return this.client.delete(`organizers/${organizer}/events/${event}/`);
  }

  /**
   * Get all events with their corresponding items.
   * @param {string} organizer - The organizer's slug.
   * @returns {Promise<Object>} - The events data with items.
   */
  async getEventsWithItems(organizer, params = {}) {
    const eventsResponse = await this.getAll(organizer, params);
    const events = eventsResponse.data.results;

    // console.log(events);

    const eventsWithItems = await Promise.all(
      events.map(async (event) => {
        const itemsResponse = await this.items.getAll(organizer, event.slug);
        event.items = itemsResponse.data.results;
        return event;
      })
    );

    return { data: eventsWithItems };
  }
}

module.exports = Events;
