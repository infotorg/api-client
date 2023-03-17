# api-client

Promised-based Api Client for node.js and the browser (axios wrapper).
More info about options you can find in [axios docs](https://axios-http.com/docs/intro).

## [API documentation](https://infotorg.github.io/api-client/)

## Installation

```bash
$ npm install @infotorg/api-client
```

## Usage

```javascript
import { ApiClient } from '@infotorg/api-client';
// or for node.js
// const { ApiClient } = require('@infotorg/api-client');

const apiClient = new ApiClient({
  // Other options you can find in axios docs
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET request
const response = await apiClient.get('/users/1');

// POST request
const response = await apiClient.post('/users', {
  name: 'John',
  age: 30,
});

// PUT request
const response = await apiClient.put('/users/1', {
  name: 'John',
  age: 30,
});

// PATCH request
const response = await apiClient.patch('/users/1', {
  name: 'John',
  age: 33,
});

// DELETE request
const response = await apiClient.delete('/users/1');

// HEAD request
const response = await apiClient.head('/users/1');

// OPTIONS request
const response = await apiClient.options('/users/1');
```

## Tests

Tests are written with `jest`. They can be run with `npm`:

```
npm run test
```

##### LICENSE: MIT

##### AUTHOR: [Volodymyr Chumak](https://github.com/coderua)
