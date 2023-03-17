/**
 * ApiClient class is a wrapper around axios.
 *
 * It provides the same set of methods to make requests to the API.
 * Also, it provides a way to add interceptors to the request/response cycle.
 */
class ApiClient {
  /**
   * An instance of axios with a custom config.
   *
   * @type {AxiosInstance}
   */
  #instance;

  /**
   * ApiClient constructor
   *
   * @param {{create: function}|Axios} httpClient - Http client or axios instance
   * @param {AxiosRequestConfig|{}} instanceConfig - Config defaults for the instance
   */
  constructor(httpClient, instanceConfig = {}) {
    this.#instance = httpClient.create(instanceConfig);
  }

  /**
   * Returns default configuration
   *
   * @return {AxiosRequestConfig}
   */
  get defaults() {
    return this.#instance.defaults;
  }

  /**
   * Set default configuration value
   *
   * @param {*} value
   *
   * @example
   * const apiClient = new ApiClient();
   *
   * apiClient.defaults.headers.common['X-Test'] = 'test';
   * api.defaults.baseURL = 'https://example.com';
   * api.defaults.timeout = 100;
   *
   * console.log(api.defaults.headers.common['X-Test'])
   * test
   *
   * console.log(api.defaults.baseURL)
   * https://example.com
   *
   * console.log(api.defaults.timeout)
   * 100
   */
  set defaults(value) {
    this.#instance.defaults = value;
  }

  /**
   * Interceptors getter
   *
   * @return {{request: AxiosInterceptorManager<AxiosRequestConfig>, response: AxiosInterceptorManager<AxiosResponse>}}
   */
  get interceptors() {
    return this.#instance.interceptors;
  }

  //-------
  // Methods to manage Request/Response interceptors
  //-------

  /**
   * Add a request interceptor
   *
   * @param {Function} onFulfilled - Any status code that lie within the range of 2xx cause this function to trigger
   * @param {Function} [onRejected=null] - Any status codes that falls outside the range of 2xx cause this function to trigger
   *
   * @return {Number} An ID used to remove interceptor later
   */
  addRequestInterceptor(onFulfilled, onRejected = null) {
    return this.#instance.interceptors.request.use(onFulfilled, onRejected);
  }

  /**
   * Remove a Request interceptor from the stack
   *
   * @param {Number} id - The ID that was returned by `addRequestInterceptor`
   */
  removeRequestInterceptor(id) {
    this.#instance.interceptors.request.eject(id);
  }

  /**
   * Add a response interceptor
   *
   * @param {Function} onFulfilled Any status code that lie within the range of 2xx cause this function to trigger
   * @param {Function} [onRejected=null] Any status codes that falls outside the range of 2xx cause this function to trigger
   *
   * @return {Number} - An ID used to remove interceptor later
   */
  addResponseInterceptor(onFulfilled, onRejected = null) {
    return this.#instance.interceptors.response.use(onFulfilled, onRejected);
  }

  /**
   * Remove a Response interceptor from the stack
   *
   * @param {Number} id - The ID that was returned by `addResponseInterceptor`
   */
  removeResponseInterceptor(id) {
    this.#instance.interceptors.response.eject(id);
  }

  /**
   * Returns the URL for making request
   *
   * @param {Object} [config] - The config specific for this request (merged with defaults)
   * @return {string}
   */
  getUri(config) {
    return this.#instance.getUri(config);
  }

  //-------
  // Request methods
  //-------

  /**
   * Dispatch a request
   *
   * @param {Object} config - The config specific for this request (merged with defaults)
   * @return {Promise<AxiosResponse<any>>}
   */
  request(config) {
    return this.#instance.request(config);
  }

  /**
   * Performs GET Request
   *
   * @param {String} url - Request url Request url
   * @param {Object} [config={}] - Request config
   * @returns {Promise<AxiosResponse<any>>}
   */
  get(url, config = {}) {
    return this.#instance.get(url, config);
  }

  /**
   * Performs DELETE Request
   *
   * @param {String} url - Request url Request url
   * @param {Object} [config={}] - Request config
   * @returns {Promise<AxiosResponse<any>>}
   */
  delete(url, config = {}) {
    return this.#instance.delete(url, config);
  }

  /**
   * Performs HEAD Request
   *
   * @param {String} url - Request url Request url
   * @param {Object} [config={}] - Request config
   * @returns {Promise<AxiosResponse<any>>}
   */
  head(url, config = {}) {
    return this.#instance.head(url, config);
  }

  /**
   * Performs OPTIONS Request
   *
   * @param {String} url - Request url Request url
   * @param {Object} [config={}] - Request config
   * @returns {Promise<AxiosResponse<any>>}
   */
  options(url, config = {}) {
    return this.#instance.options(url, config);
  }

  /**
   * Performs POST Request
   *
   * @param {String} url - Request url
   * @param {string|{}|ArrayBuffer|ArrayBufferView|URLSearchParams|FormData|File|Blob|Stream|Buffer} [data=null] - The data to be sent as the request body. Browser only: FormData, File, Blob. Node only: Stream, Buffer.
   * @param {Object} [config={}] - Request config
   * @returns {Promise<AxiosResponse<any>>}
   */
  post(url, data = null, config = {}) {
    return this.#instance.post(url, data, config);
  }

  /**
   * Performs PUT Request
   *
   * @param {String} url - Request url
   * @param {string|{}|ArrayBuffer|ArrayBufferView|URLSearchParams|FormData|File|Blob|Stream|Buffer} [data=null] - The data to be sent as the request body. Browser only: FormData, File, Blob. Node only: Stream, Buffer.
   * @param {Object} [config={}] - Request config
   * @returns {Promise<AxiosResponse<any>>}
   */
  put(url, data = null, config = {}) {
    return this.#instance.put(url, data, config);
  }

  /**
   * Performs PATCH Request
   *
   * @param {String} url - Request url
   * @param {string|{}|ArrayBuffer|ArrayBufferView|URLSearchParams|FormData|File|Blob|Stream|Buffer} [data=null] - The data to be sent as the request body. Browser only: FormData, File, Blob. Node only: Stream, Buffer.
   * @param {Object} [config={}] - Request config
   * @returns {Promise<AxiosResponse<any>>}
   */
  patch(url, data = null, config = {}) {
    return this.#instance.patch(url, data, config);
  }

  /**
   * Performs POST Request with FormData
   *
   * @param {String} url - Request url
   * @param {string|{}|ArrayBuffer|ArrayBufferView|URLSearchParams|FormData|File|Blob|Stream|Buffer} [data=null] - The data to be sent as the request body. Browser only: FormData, File, Blob. Node only: Stream, Buffer.
   * @param {Object} [config={}] - Request config
   * @return {Promise<axios.AxiosResponse<any>>}
   */
  postForm(url, data = null, config = {}) {
    return this.#instance.postForm(url, data, config);
  }

  /**
   * Performs PUT Request with FormData
   *
   * @param {String} url - Request url
   * @param {string|{}|ArrayBuffer|ArrayBufferView|URLSearchParams|FormData|File|Blob|Stream|Buffer} [data=null] - The data to be sent as the request body. Browser only: FormData, File, Blob. Node only: Stream, Buffer.
   * @param {Object} [config={}] - Request config
   * @return {Promise<axios.AxiosResponse<any>>}
   */
  putForm(url, data = null, config = {}) {
    return this.#instance.putForm(url, data, config);
  }

  /**
   * Performs PATCH Request with FormData
   *
   * @param {String} url - Request url
   * @param {string|{}|ArrayBuffer|ArrayBufferView|URLSearchParams|FormData|File|Blob|Stream|Buffer} [data=null] - The data to be sent as the request body. Browser only: FormData, File, Blob. Node only: Stream, Buffer.
   * @param {Object} [config={}] - Request config
   * @return {Promise<axios.AxiosResponse<any>>}
   */
  patchForm(url, data = null, config = {}) {
    return this.#instance.patchForm(url, data, config);
  }
}

export { ApiClient };
