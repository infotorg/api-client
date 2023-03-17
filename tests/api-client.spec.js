import axios from 'axios';
import { ApiClient } from '../src/api-client';

describe('Tests ApiClient class', () => {
  test('it should create an ApiClient class instance', () => {
    expect(new ApiClient(axios)).toBeInstanceOf(ApiClient);
  });

  test('it should provide a public API', () => {
    const api = new ApiClient(axios);

    [
      // Default configuration getter/setter
      'defaults',

      // Interceptors getter
      'interceptors',

      // Manage Request/Response interceptors
      'addRequestInterceptor',
      'removeRequestInterceptor',
      'addResponseInterceptor',
      'removeResponseInterceptor',

      'getUri',

      // Request methods
      'request',
      'get',
      'delete',
      'head',
      'options',
      'post',
      'put',
      'patch',
      'putForm',
      'postForm',
      'patchForm',
    ].forEach((property) => expect(api[property]).toBeDefined());
  });
});
