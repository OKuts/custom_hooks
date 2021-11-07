import {useState} from "react";

export const useInput = (initial) => {
  const [value, setValue] = useState(initial);

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}
