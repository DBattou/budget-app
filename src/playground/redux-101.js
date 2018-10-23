import { createStore } from "redux";

const increment = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: typeof incrementBy === "number" ? incrementBy : 1
});

const decrement = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy: typeof decrementBy === "number" ? decrementBy : 1
  }
}

const reset = () => {
  return {
    type: "RESET"
  }
}

const set = ({ setBy } = {}) => {
  return {
    type: "SET",
    setBy: typeof setBy === "number" ? setBy : 0
  }
}

// Reducers
// 1. Reducers is a pure fonctions
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.setBy }
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
//
// unsubscribe();


store.dispatch(
  increment({
    incrementBy: 10
  })
);

store.dispatch(increment({ incrementBy: "coucou" }));

store.dispatch(reset());

store.dispatch(decrement({
  decrementBy: 10
}));

store.dispatch(set({
  setBy: 10
}));
