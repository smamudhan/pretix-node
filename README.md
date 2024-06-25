# Pretix Node Wrapper

A Node Wrapper for the Pretix REST API.

## Installation

```sh
npm install pretix-node
```

## Usage

```javascript
const PretixSDK = require("pretix-node");

const apiToken = "your-api-token";
const baseUrl = "https://pretix.eu/api/v1/";
const pretix = new PretixSDK(apiToken, baseUrl);

// Example: Get all customers
pretix.customers
  .getAll()
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## API

### Customers

- `getAll(params)`: Get all customers.
- `get(id, params)`: Get a specific customer by ID.
- `create(data)`: Create a new customer.
- `update(id, data)`: Update an existing customer.
- `delete(id)`: Delete a customer.

### Events

- `getAll(organizer)`: Get all events for an organizer.
- `get(organizer, event, params)`: Get a specific event.
- `create(organizer, data)`: Create a new event.
- `update(organizer, event, data)`: Update an existing event.
- `delete(organizer, event)`: Delete an event.

### Items

- `getAll(organizer, event, params)`: Get all items for an event.
- `get(organizer, event, item, params)`: Get a specific item.
- `create(organizer, event, data)`: Create a new item.
- `update(organizer, event, item, data)`: Update an existing item.
- `delete(organizer, event, item)`: Delete an item.

### Orders

- `getAll(organizer, event, params)`: Get all orders for an event.
- `get(organizer, event, code, params)`: Get a specific order.
- `getTIckets(organizer, event, code, output)`: Download tickets for a specific order
- `create(organizer, event, data)`: Create a new order.
- `update(organizer, event, code, data)`: Update an existing order.
- `delete(organizer, event, code)`: Delete an order.
- `getTickets(organizer, event, order, params)`: Get tickets for an order.
- `markAsPaid(organizer, event, code)`: Mark an order as paid.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the GPL-3.0 License.
