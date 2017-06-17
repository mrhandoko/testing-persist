import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducer';

const store = createStore(rootReducer, compose(applyMiddleware(logger, thunk), autoRehydrate(), window.devToolsExtension ? window.devToolsExtension() : f => f))
persistStore(store)

export default store;
