import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Reducers/CounterReducer";
import createSagaMiddleware from 'redux-saga'
import userReducer from "./Reducers/UserReducer";
import loaderReducer from "./Reducers/LoaderReducer";
import { productReducer } from "./Reducers/ProductReducer";
import rootSaga from "../Saga/Rootsaga";
import { authenticationReducer } from "./Reducers/AuthenticationReducer";
import { storeReducer } from "./Reducers/StoreReducer";
const rootReducer = combineReducers({
  counter: counterReducer,
  users:userReducer,
  loader:loaderReducer,
  products:productReducer,
  authentication:authenticationReducer,
  store:storeReducer
});



const sagaMiddleware = createSagaMiddleware();
export const store= configureStore({
reducer:rootReducer,
middleware:[sagaMiddleware]
});
sagaMiddleware.run(rootSaga);

