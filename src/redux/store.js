import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import rootReducers from "./index";
import cartReducer from "../cartReducer";
const store = createStore(rootReducers,composeWithDevTools())
export default store;

