import { useEffect, useRef } from "react";
import { isEqual } from "lodash";

const useDeepCompareEffect = (
  callback: () => void | (() => void),
  dependencies: any[]
): void => {
  const previousDependenciesRef = useRef<any[]>();

  if (!isEqual(previousDependenciesRef.current, dependencies)) {
    previousDependenciesRef.current = dependencies;
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(callback, [previousDependenciesRef.current]);
};

export default useDeepCompareEffect;
