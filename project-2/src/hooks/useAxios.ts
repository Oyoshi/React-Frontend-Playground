import axios from "axios";
import { useState, useEffect } from "react";

type DataState<T> = {
  isLoading: boolean;
  data: T | null;
  error: any;
};

type RequestType = "get" | "post" | "put" | "delete";

const createDataStateObject = <T>(
  isLoading: boolean,
  data: T | null,
  error: any
): DataState<T> => ({
  isLoading: isLoading,
  data: data,
  error: error,
});

export const useAxios = <T>(
  url: string,
  method: RequestType = "get",
  deps: any[] = []
): DataState<T> => {
  const [state, setState] = useState<DataState<T>>(
    createDataStateObject<T>(true, null, null)
  );

  useEffect(
    () => {
      axios({ method: method, url: url })
        .then((resp) => {
          const newStateWithData = createDataStateObject<T>(
            false,
            resp.data,
            null
          );
          setState(newStateWithData);
        })
        .catch((reason: any) => {
          const newStateWithError = createDataStateObject<T>(
            false,
            null,
            reason
          );
          setState(newStateWithError);
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  return state;
};
