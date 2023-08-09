 import { useDispatch, useSelector } from "react-redux"
import { changeAge,consoleName } from "../store01"
export default function Cart01(){
  let state = useSelector(state => state);
  let dispatch = useDispatch();
 console.log(state)
  return (
  <>
  <p>
    {state.user.name}
    <button 
    type="button"
    // onClick = {() => dispatch(consoleName())}
    >click</button>
  </p>
  <p>
    {state.user.age}
    <button 
    type="button"
    onClick = {() => dispatch(changeAge())}
    >click</button>

  </p>
  </>
  )

}
