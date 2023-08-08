import { useDispatch, useSelector } from "react-redux"
import { changeCoute } from "../store";

export default function Cart(){
  let state = useSelector(state => state);
  let dispatch = useDispatch();
  // console.log(dispatch)
  return (
  <>
  <div>
    {state.counter}
    <p>
      <button 
        type="button"
        onClick = {() => dispatch(changeCoute())}>click</button>
      </p>
  </div>
  <ul>
   { state.cart.map(item => (<li key={item.id}>{item.product} : {item.price}</li>))}
  </ul>
  </>
  )
}
//  36 - 46