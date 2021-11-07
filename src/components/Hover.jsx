import {useHover} from "../hooks/useHover";
import {useRef} from "react";

export const Hover = () =>{
  const ref = useRef();
  const isHover = useHover(ref);

  console.log(isHover);

  return (
    <div ref={ref} className={isHover ? 'hoverRed' : 'hoverGray'}/>
  )
}
