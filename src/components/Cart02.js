import { useDispatch, useSelector } from "react-redux"
import { changeNum } from "../store02";

export default function Cart02(){
  let state = useSelector(state => state);
  console.log(state);
  let dispatch = useDispatch();
  return (
    <div>
      <p>{state.num}</p>
      <p>
        <button
         type="button"
         onClick={() => dispatch(changeNum(10))}
         > 10 +</button>
        <button
         type="button"
         onClick={() => dispatch(changeNum(100))}
         >100 +</button>
      </p>
    </div>
  )
}