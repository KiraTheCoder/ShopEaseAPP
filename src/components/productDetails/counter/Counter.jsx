import React, { useReducer } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const initialState = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { count: state.count + 1 };
    case 'remove':
      return { count: state.count > 1 ? state.count - 1 : 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function Counter(flag) {
  const [counter, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className=" w-[7rem] flex justify-between mb-4 mt-[0.5rem]">
        <button className="flex justify-center items-center py-2 px-2 rounded-sm bg-gray-100 hover:bg-slate-200" onClick={() => dispatch({ type: "remove" })}>
          <FaMinus />
        </button>
        <h3>{counter.count}</h3>
        <button className="flex justify-center items-center py-2 px-2 rounded-sm bg-gray-100 hover:bg-slate-200" onClick={() => dispatch({ type: "add" })}>
          <FaPlus />
        </button>
      </div>
        <button className="flex justify-center items-center py-0 px-6 ml-3.5 text-red-600 bg-gray-200 hover:bg-slate-300" onClick={() => dispatch({ type: "reset" })}>
        Delete
      </button>
    </>
  );
}

export default Counter;
