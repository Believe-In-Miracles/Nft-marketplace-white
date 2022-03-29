import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['switch', 'metauser'] // only navigation will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
const saga = createSagaMiddleware();

const store = createStore(
    persistedReducer,
    applyMiddleware(saga)
);

saga.run(rootSaga);
const persistor = persistStore(store);
export {store, persistor};