const { AsyncLocalStorage } = require('async_hooks');

const storage = new AsyncLocalStorage();

const getCorrelationId = () => storage.getStore()?.correlationId || 'N/A';

const setCorrelationId = (id) => storage.getStore() && (storage.getStore().correlationId = id);

module.exports = { getCorrelationId, setCorrelationId, storage };
