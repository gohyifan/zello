import { combineReducers, createStore } from "redux";

// relative imports
import board from "./board_reducer";
import listsById from "./list_reducer";
import cardsById from "./card_reducer";
import seed from "../seed";

const reducers = combineReducers({
  board,
  listsById,
  cardsById
});

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedState = loadState();
const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState(store.getState())
});

console.log(store.getState());
if (!store.getState().board.lists.length) {
  console.log("SEED");
  seed(store);
}

export default store;
