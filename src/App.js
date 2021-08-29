import {useReducer} from "react";
import reducer from "./reducers/reducers";

export default  function App() {

let [state, dispatch] = useReducer(reducer);
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch('+')}>inc + 10</button>
        <button onClick={() => dispatch('-')}>dec - 2</button>

    </div>
  );
}


