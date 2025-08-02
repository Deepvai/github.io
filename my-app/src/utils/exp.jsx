import { useMemo } from "react";

export default function Exp() {
  const value = () => {
    let index1 = 0;
    for (let index = 0; index <= 100000000; index++) {
      index1 = index;
    }
    return index1;
  };
  const expensive = useMemo(() => {
    return value();
  },[]);

  return <p>{expensive}</p>;
}
