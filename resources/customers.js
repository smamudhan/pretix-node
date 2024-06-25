const HttpClient = require("../helpers/httpClient");

/**
 * Customers class to interact with the Pretix Customers API.
 */
class Customers {
  /**
   * Creates an instance of Customers.
   * @param {HttpClient} client - An instance of HttpClient.
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Get all customers.
   * @param {Object} [params={}] - The query parameters.
   * @returns {Promise<Object>} - The customers data.
   */
  async getAll(params = {}) {
    return this.client.get("customers/", params);
  }

  /**
   * Get a specific customer.
   * @param {string} id - The customer ID.
   * @returns {Promise<Object>} - The customer data.
   */
  async get(id) {
    return this.client.get(`customers/${id}/`);
  }

  /**
   * Create a new customer.
   * @param {Object} data - The customer data.
   * @returns {Promise<Object>} - The created customer data.
   */
  async create(data) {
    return this.client.post("customers/", data);
  }

  /**
   * Update an existing customer.
   * @param {string} id - The customer ID.
   * @param {Object} data - The updated customer data.
   * @returns {Promise<Object>} - The updated customer data.
   */
  async update(id, data) {
    return this.client.patch(`customers/${id}/`, data);
  }

  /**
   * Delete a customer.
   * @param {string} id - The customer ID.
   * @returns {Promise<Object>} - The response data.
   */
  async delete(id) {
    return this.client.delete(`customers/${id}/`);
  }
}

module.exports = Customers;
