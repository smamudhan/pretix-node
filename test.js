const PretixSDK = require('./index');

// Replace with your actual API token and base URL if different
const apiToken = 'your-api-token';
const baseUrl = 'https://pretix.eu/api/v1/';
const organizerSlug = 'your-organizer-slug'

// Initialize the SDK
const sdk = new PretixSDK(apiToken, baseUrl);

async function testSDK() {
  try {
    // Example test for fetching all customers
    const customers = await sdk.customers.getAll();
    console.log('Customers:', customers.data);

    // Example test for fetching all events for a given organizer
    const organizer = organizerSlug;
    const events = await sdk.events.getAll(organizer);
    console.log('Events:', events.data);

  } catch (error) {
    console.error('Error:', error);
  }
}

testSDK();
