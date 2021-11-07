import {useEffect, useState} from "react";

export const useHover = (ref) => {
  const [isHover, setIsHover] = useState(false);

  const on = () => setIsHover(true);
  const off = () => setIsHover(false);

  useEffect(() => {
    const node = ref.current;
    node.addEventListener('mousemove', on);
    node.addEventListener('mouseleave', off);
    node.addEventListener('mouseenter', on);

    return () => {
      node.removeEventListener('mousemove', on);
      node.removeEventListener('mouseleave', off);
      node.removeEventListener('mouseenter', on);
    }
  }, [])
  return isHover;
}
