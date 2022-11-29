import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./slices/countSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <>
      {/* ================================= START ================================ */}
      <div className="box">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(5))}
          className="buttons"
        >
          +
        </button>

        <h1 className="counter"> {count.counter.value} </h1>

        <button
          area-aria-label="Decrement value"
          onClick={() => dispatch(decrement(0))}
          className="buttons"
        >
          -
        </button>
      </div>
      {/* ================================= END ================================ */}

      {/* ================ START ========================= */}
      <h1 className="my_name space-top"> {count.counter.naam} </h1>
      {/* ================ END ========================= */}

      {/* ================================= START ================================ */}
      <div className="box space-top">
        <button onClick={() => dispatch(incrementByAmount(5))} className="btn">
          Add
        </button>

        <h1 className="counter"> {count.counter.amount} </h1>

        <button onClick={() => dispatch(decrementByAmount(5))} className="btn">
          Remove
        </button>
      </div>
      {/* ================================= END ================================ */}
    </>
  );
}

export default App;
