import './App.css';
import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function App() {

    let [state, dispatch] = useReducer(reducer, {a:0, b:0,c:0});
    let {a,b,c} = state
    console.log(state);
    return (
    <div className={'dataBlock'}>
        <div className={'block'}>
      <h1>first  - {a}</h1>
      <button onClick={()=> dispatch({obj:'a' , act: '+'})}>INC</button>
      <button onClick={()=> dispatch({obj:'a' , act: '-'})}>DEC</button>
        </div>
        <div className={'block'}>
      <h1>second  - {b}</h1>
      <button onClick={()=> dispatch({obj: 'b', act:'+'})}>INC</button>
      <button onClick={()=> dispatch({obj: 'b', act:'-'})}>DEC</button>
        </div>
        <div className={'block'}>
      <h1>third  - {c}</h1>
      <button onClick={()=> dispatch({obj: 'c', act:'+'})}>INC</button>
      <button onClick={()=> dispatch({obj: 'c', act: '-'})}>DEC</button>
        </div>
    </div>
  );
}


