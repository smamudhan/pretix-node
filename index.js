const HttpClient = require('./helpers/httpClient');
const Customers = require('./resources/customers');
const Events = require('./resources/events');
const Items = require('./resources/items');
const Orders = require('./resources/orders');

/**
 * PretixSDK class to interact with the Pretix API.
 */
class PretixSDK {
  /**
   * Creates an instance of PretixSDK.
   * @param {string} apiToken - The API token for authentication.
   * @param {string} [baseUrl='https://pretix.eu/api/v1/'] - The base URL of the Pretix API.
   */
  constructor(apiToken, baseUrl = 'https://pretix.eu/api/v1/') {
    this.client = new HttpClient(apiToken, baseUrl);
    this.customers = new Customers(this.client);
    this.events = new Events(this.client);
    this.items = new Items(this.client);
    this.orders = new Orders(this.client);
  }
}

module.exports = PretixSDK;
