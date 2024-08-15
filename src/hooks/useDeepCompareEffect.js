import { useEffect, useRef } from "react";
import { isEqual } from "lodash";

const useDeepCompareEffect = (callback, dependencies) => {
  const previousDependenciesRef = useRef();

  if (!isEqual(previousDependenciesRef.current, dependencies)) {
    previousDependenciesRef.current = dependencies;
  }

  useEffect(() => {
    return callback();
  }, [previousDependenciesRef.current]);
};

export default useDeepCompareEffect;
