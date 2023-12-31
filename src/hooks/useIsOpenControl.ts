import { useCallback, useState } from "react";

const useIsOpenControl = (initialState = false) => {
  const [isopen, setIsopen] = useState(initialState);

  const open = useCallback(() => setIsopen(true), []);
  const close = useCallback(() => setIsopen(false), []);
  const toggle = useCallback(() => setIsopen((isopen) => !isopen), []);

  return { isopen, open, close, toggle };
};

export default useIsOpenControl;
