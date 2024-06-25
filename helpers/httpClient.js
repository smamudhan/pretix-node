const axios = require('axios');

/**
 * HttpClient class to handle HTTP requests.
 */
class HttpClient {
  /**
   * Creates an instance of HttpClient.
   * @param {string} apiToken - The API token for authentication.
   * @param {string} baseUrl - The base URL of the Pretix API.
   */
  constructor(apiToken, baseUrl) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Token ${apiToken}`
      }
    });
  }

  /**
   * Helper method for GET requests.
   * @param {string} endpoint - The API endpoint.
   * @returns {Promise<Object>} - The response data.
   */
  async get(endpoint) {
    return this.client.get(endpoint);
  }

  /**
   * Helper method for POST requests.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} data - The data to send in the request body.
   * @returns {Promise<Object>} - The response data.
   */
  async post(endpoint, data) {
    return this.client.post(endpoint, data);
  }

  /**
   * Helper method for PATCH requests.
   * @param {string} endpoint - The API endpoint.
   * @param {Object} data - The data to send in the request body.
   * @returns {Promise<Object>} - The response data.
   */
  async patch(endpoint, data) {
    return this.client.patch(endpoint, data);
  }

  /**
   * Helper method for DELETE requests.
   * @param {string} endpoint - The API endpoint.
   * @returns {Promise<Object>} - The response data.
   */
  async delete(endpoint) {
    return this.client.delete(endpoint);
  }
}

module.exports = HttpClient;
